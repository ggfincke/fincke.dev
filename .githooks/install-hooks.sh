# #!/bin/sh
# #
# # Install Git hooks from .githooks directory
# #
# 
# echo "Installing Git hooks..."
# 
# # Configure Git to use .githooks directory
# git config core.hooksPath .githooks
# 
# echo "✅ Git hooks installed successfully!"
# echo ""
# echo "The following hooks are now active:"
# echo "  - pre-commit: Auto-versions package.json and CHANGELOG.md on dev branch"
# echo "  - pre-push: Ensures CHANGELOG.md is updated when pushing to dev branch"
# echo ""
# echo "To disable hooks temporarily, use: git commit --no-verify or git push --no-verify"