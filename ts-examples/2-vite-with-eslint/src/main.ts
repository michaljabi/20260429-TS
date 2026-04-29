import './style.css';
import { Message } from './component/Message'

let text = 'Hello World';
const $app = document.querySelector('#app')

if($app) {
	$app.innerHTML = `
Przykład pokazuje wykorzystanie ${wrapInCode('ESLint')}.
<hr>
${wrapInCode('ESLint')} jest narzędziem do <i>Lint'owania</i> kodu (sprawdzania poprawności).
`;

	$app.append(
		new Message('Hello component'),
		new Message('Hello 2nd component')
	);
}

function wrapInCode(text: string, text2 = 'example') {
	return `<code>${text}</code>`;
}


