cd build
git init
git config user.name "Travis CI"
git config user.email "wlc7180203@outlook.com"
git add .
git commit -m "Deploy at `date +"%Y-%m-%d %H:%M"`"
git push --force --quiet "https://${GitHub_TOKEN}@${GitHub_REF}" master:gh-pages > /dev/null 2>&1