#!/bin/bash

# create pre-commit file
touch ./.git/hooks/pre-commit

# write pre-commit file
cat << 'EOF' > .git/hooks/pre-commit
#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

start_time=$(date +%s)

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# List of protected branches
protected_branches=("master" "develop" "master")

# Check if the current branch is protected
for branch in "${protected_branches[@]}"; do
    if [[ "$current_branch" == "$branch" ]]; then
        echo "You cannot commit directly to the [ $branch ] branch!"
        exit 1
    fi
done

# Run Type check
echo "Running TypeCheck..."
yarn typecheck

# Run tests
echo "Running tests... not command"
yarn test:vitest

# Run linter (e.g., ESLint or Biome)
echo "Running linter..."
yarn lint

# Run code build
echo "code cbuild"
yarn build

# End timing
end_time=$(date +%s)
duration=$((end_time - start_time))

# If everything passed
echo "All checks passed! Proceeding with commit."
echo "⏱️ Pre-commit hook duration: ${duration} seconds"

# Exit with success code
exit 0
EOF

# file permission
chmod +x ./.git/hooks/pre-commit
