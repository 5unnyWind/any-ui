if [ -z "$1" ]; then
  echo "请传入版本号，如：pnpm chore 0.1.5"
  exit 1
fi
npx bump-version $1
git add .
git commit -m "chore: bump version to v$1"
git push
git tag v$1
git push --tags
