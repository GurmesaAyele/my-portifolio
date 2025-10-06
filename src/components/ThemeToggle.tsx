import React, { useEffect, useState } from 'react'


const ThemeToggle: React.FC = () => {
const [theme, setTheme] = useState<'light'|'dim'|'dark'>(() => {
return (localStorage.getItem('site-theme') as 'light'|'dim'|'dark') || 'light'
})


useEffect(() => {
document.documentElement.setAttribute('data-theme', theme)
localStorage.setItem('site-theme', theme)
}, [theme])


return (
<div className="theme-toggle">
<select value={theme} onChange={e => setTheme(e.target.value as any)} aria-label="Choose theme">
<option value="light">Light</option>
<option value="dim">Dim</option>
<option value="dark">Dark</option>
</select>
</div>
)
}


export default ThemeToggle