import { Counter } from './components/Counter'

export default function App() {
    return (
        <main>
            <h1>Hello <code>React</code> world 👋</h1>
            <Counter startWith={10} />
            <Counter />
            <Counter startWith={120} />
        </main>
    )
}
