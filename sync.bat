@echo off
setlocal enabledelayedexpansion

echo [1/3] Adding changes...
git add .

echo [2/3] Committing changes...
:: Check if there are changes to commit
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Manual sync: %date% %time%"
) else (
    echo No changes to commit.
)

echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ==========================================
echo Sync Complete! Your changes are now live.
echo ==========================================
pause
