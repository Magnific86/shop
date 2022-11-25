
export default function DarkMode(props) {

return (<button className="bg-green-300 rounded-3xl px-6 py-3 dark:bg-black dark:text-green-200"
onClick={() => props.onThemeSwitch()}
>{props.theme}</button>)

}