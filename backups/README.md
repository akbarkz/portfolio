# MongoDB Backups

This directory contains automated backups of the MongoDB database.

## Backup Schedule

Backups run automatically every day at 2 AM UTC via GitHub Actions.

## Backup Contents

Each backup folder contains:
- `dump/` - Full MongoDB dump (BSON format)
- `translations.json` - Human-readable JSON export of translations collection

## Retention Policy

Only the last 3 backups are kept to save repository space.

## Manual Backup

You can trigger a manual backup:
1. Go to Actions tab in GitHub
2. Select "Backup MongoDB" workflow
3. Click "Run workflow"

## Restore from Backup

To restore from a backup:

```bash
# Using mongorestore (restores entire database)
mongorestore --uri="YOUR_MONGODB_URI" backups/YYYY-MM-DD_HH-MM-SS/dump

# Or import just the translations
mongoimport --uri="YOUR_MONGODB_URI" --db=portfolio --collection=translations --file=backups/YYYY-MM-DD_HH-MM-SS/translations.json --jsonArray --drop
```
