module.exports = transform;
var pathMod = require('path')
const prefix = 'anyui-'
function transform(babel) {
  return {
    visitor: {
      ClassDeclaration: function (path, state) {
        if (classHasRenderMethod(path)) {
          setDisplayNameAfter(path, path.node.id, babel.types)
        }
      },
      FunctionDeclaration: function (path, state) {
        if (doesReturnJSX(path.node.body) || (path.node.id && path.node.id.name &&
          isKnownComponent(path.node.id.name, state.opts.knownComponents))) {
          var displayName
          if (path.parentPath.node.type === 'ExportDefaultDeclaration') {
            if (path.node.id === null) {
              var extension = pathMod.extname(state.file.opts.filename)
              var name = pathMod.basename(state.file.opts.filename, extension)
              var id = path.scope.generateUidIdentifier("uid");
              path.node.id = id
              displayName = name
            }
            setDisplayNameAfter(path, path.node.id, babel.types, displayName)
          } else if (path.parentPath.node.type === 'Program' || path.parentPath.node.type === 'ExportNamedDeclaration') {
            setDisplayNameAfter(path, path.node.id, babel.types, displayName)
          }
        }
      },
      FunctionExpression: function (path, state) {
        if (shouldSetDisplayNameForFuncExpr(path, state.opts.knownComponents)) {
          var id = findCandidateNameForExpression(path)
          if (id) {
            setDisplayNameAfter(path, id, babel.types)
          }
        }
      },
      ArrowFunctionExpression: function (path, state) {
        if (shouldSetDisplayNameForFuncExpr(path, state.opts.knownComponents)) {
          var id = findCandidateNameForExpression(path)
          if (id) {
            setDisplayNameAfter(path, id, babel.types)
          }
        }
      }
    }
  }
}

function isKnownComponent(name, knownComponents) {
  return (name && knownComponents && knownComponents.indexOf(name) > -1)
}

function componentNameFromFilename(filename) {
  var extension = pathMod.extname(filename);
  var name = pathMod.basename(filename, extension)
  return name
}

function shouldSetDisplayNameForFuncExpr(path, knownComponents) {
  var id
  if (path.parentPath.node.type === 'AssignmentExpression' &&
    path.parentPath.node.left.type !== 'MemberExpression' && // skip static members
    path.parentPath.parentPath.node.type === 'ExpressionStatement' &&
    path.parentPath.parentPath.parentPath.node.type === 'Program') {
    id = path.parentPath.node.left
  } else {
    if (path.parentPath.node.type === 'CallExpression') {
      path = path.parentPath
    }

    if (path.parentPath.node.type === 'VariableDeclarator') {
      if (path.parentPath.parentPath.parentPath.node.type === 'ExportNamedDeclaration' ||
        path.parentPath.parentPath.parentPath.node.type === 'Program') {
        id = path.parentPath.node.id
      }
    }
  }

  if (id) {
    if (id.name && isKnownComponent(id.name, knownComponents)) {
      return true
    }
    return doesReturnJSX(path.node.body)
  }

  return false
}

function classHasRenderMethod(path) {
  if (!path.node.body) {
    return false
  }
  var members = path.node.body.body
  for (var i = 0; i < members.length; i++) {
    if (members[i].type === 'ClassMethod' && members[i].key.name === 'render') {
      return true
    }
  }

  return false
}

function findCandidateNameForExpression(path) {
  var id
  path.find(function (path) {
    if (path.isAssignmentExpression()) {
      id = path.node.left;
    } else if (path.isVariableDeclarator()) {
      id = path.node.id;
    } else if (path.isStatement()) {
      return true;
    }
    if (id) return true;
  });
  return id
}

function doesReturnJSX(body) {
  if (!body) return false
  if (body.type === 'JSXElement') {
    return true
  }

  var block = body.body
  if (block && block.length) {
    var lastBlock = block.slice(0).pop()
    if (lastBlock.type === 'ReturnStatement') {
      return lastBlock.argument !== null && lastBlock.argument.type === 'JSXElement'
    }
  }

  return false
}
console.log('Components displayed as:')
function setDisplayNameAfter(path, nameNodeId, t, displayName) {
  if (!displayName) {
    displayName = nameNodeId.name
  }
  displayName = prefix + displayName
  var blockLevelStmnt
  path.find(function (path) {
    if (path.parentPath.isBlock()) {
      blockLevelStmnt = path
      return true
    }
  })

  if (blockLevelStmnt) {
    var trailingComments = blockLevelStmnt.node.trailingComments
    delete blockLevelStmnt.node.trailingComments

    var setDisplayNameStmn = t.expressionStatement(t.assignmentExpression(
      '=',
      t.memberExpression(nameNodeId, t.identifier('displayName')),
      t.stringLiteral(displayName)
    ))
    console.log('\x1b[32m%s\x1b[0m',displayName)
    blockLevelStmnt.insertAfter(setDisplayNameStmn)
  }
}
