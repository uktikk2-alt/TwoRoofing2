# sync.ps1 - Automatic Git Sync Script
# This script watches for changes and pushes them to GitHub every 60 seconds.

Write-Host "Starting automatic sync watcher..." -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

while ($true) {
    $changes = git status --porcelain
    if ($changes) {
        Write-Host "Changes detected! Syncing..." -ForegroundColor Green
        git add .
        git commit -m "auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push
    } else {
        # Write-Host "No changes. Waiting..." -ForegroundColor Gray
    }
    Start-Sleep -Seconds 60
}
