# N2 Japanese Grammar Study Tool

## File Structure
```
index.html        ← The app UI and games (rarely needs editing)
grammar-data.js   ← ALL grammar data lives here (edit this for new units)
README.md         ← This file
```

## How to Add a New Unit

Open `grammar-data.js` and add entries before the closing `];`

Copy this template and fill in:

```javascript
{ id: 41,               // ← next number after the last entry
  unit: 'Unit 4',       // ← match your class note heading
  pattern: '〜grammar',
  english: 'English meaning',
  meaning: 'Full explanation of when and how to use it.',
  structure: '[接続形] ＋ grammar ending',
  examples: [
    { jp: 'Japanese example sentence。', en: 'English translation.' },
    { jp: 'Japanese example sentence。', en: 'English translation.' }
  ],
  note: 'Important warnings or usage tips.',
  compareTo: 'Similar grammar and how they differ'  // optional
},
```

Save the file → commit → push to GitHub → done. The app rebuilds automatically.

## GitHub Pages Setup (one-time)

1. Create a free account at github.com
2. New repository → name it `n2-grammar` → set to **Public**
3. Upload both files (`index.html` and `grammar-data.js`)
4. Go to Settings → Pages → Source: `main` branch → Save
5. Your URL will be: `https://YOUR-USERNAME.github.io/n2-grammar`

## Monthly Workflow (after setup)

1. Receive new class notes (PDF)
2. Open Claude Code in VS Code
3. Prompt: *"Add these grammar points to grammar-data.js — [paste notes or attach PDF]"*
4. Review the additions for accuracy
5. Commit and push → live in ~60 seconds

## Games Included

| Tab | Description |
|-----|-------------|
| 📖 Overview | Browse all grammar with full detail modal |
| 🃏 Flashcards | Flip cards, mark known/unknown, shuffle |
| 📝 Quiz | 10-question multiple choice with explanations |
| 🎮 Match | Tap grammar pattern + meaning to match pairs |
| ⚡ Speed | 15-second timer per question, streak scoring |
| ✏️ Fill-in | Type the grammar to complete example sentences |

## Cost
- GitHub: Free
- GitHub Pages: Free  
- Claude Code (API): ~$0.05–0.10 per "add new unit" session
