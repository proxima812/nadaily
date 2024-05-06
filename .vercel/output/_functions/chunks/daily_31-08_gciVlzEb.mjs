import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Проблемы, казавшиеся безнадежными, легко разрешились. Наша болезнь\nостановлена, и теперь все стало возможным”.</em></p>\n<p>Основной текст, с. 128</p>\n<p>Программа АН дала нам такую свободу, о какой мы никогда и не мечтали. Иногда,\nвсе-таки, в повседневной суете мы забываем о том, как много нам дано. Как\nименно изменилась наша жизнь в Анонимных Наркоманах?</p>\n<p>Основа и самое начало выздоровления — это, конечно, свобода от тяги\nупотреблять наркотики. Нам больше не надо тратить весь свой потенциал на то,\nчтобы удовлетворить наркоманию. Больше нам не надо подвергать себя опасности,\nунижаться и злоупотреблять собой или другими только ради того, чтобы\nзаполучить очередную «дозу». Чистота сама по себе принесла большую свободу в\nнашу жизнь.</p>\n<p>Анонимные Наркоманы дали нам гораздо больше, чем просто чистоту — они нам дали\nсовершенно новую жизнь. Мы провели инвентаризацию и выявили недостатки своего\nхарактера, которые связывали нас так долго, не давая нам жить и получать\nрадость от жизни. Мы признались в этих недостатках, приняли за них\nответственность и стали искать направления и сил, которые нам необходимы для\nтого, чтобы жить по-другому. Наша домашняя группа дала нам особое тепло и\nподдержку, которые помогают нам жить в выздоровлении. И в довершение всего у\nнас есть любовь, забота и руководство Бога, к пониманию которого мы пришли в\nАН.</p>\n<p>В ходе повседневного выздоровления мы обычно забываем, насколько сильно\nизменилась наша жизнь в Анонимных Наркоманах. До конца ли мы ценим то, что\nнаша программа дала нам?</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Выздоровление дало мне свободу. Я буду встречать день с\nнадеждой, благодарный за то, что сегодня все возможно.</p>";

				const frontmatter = {"title":"31 августа. Благодарность","description":"Ежедневные размышления АН - 31 августа. Благодарность","id":"244","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_31-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Проблемы, казавшиеся безнадежными, легко разрешились. Наша болезнь\nостановлена, и теперь все стало возможным”._\n\nОсновной текст, с. 128\n\nПрограмма АН дала нам такую свободу, о какой мы никогда и не мечтали. Иногда,\nвсе-таки, в повседневной суете мы забываем о том, как много нам дано. Как\nименно изменилась наша жизнь в Анонимных Наркоманах?\n\nОснова и самое начало выздоровления — это, конечно, свобода от тяги\nупотреблять наркотики. Нам больше не надо тратить весь свой потенциал на то,\nчтобы удовлетворить наркоманию. Больше нам не надо подвергать себя опасности,\nунижаться и злоупотреблять собой или другими только ради того, чтобы\nзаполучить очередную «дозу». Чистота сама по себе принесла большую свободу в\nнашу жизнь.\n\nАнонимные Наркоманы дали нам гораздо больше, чем просто чистоту — они нам дали\nсовершенно новую жизнь. Мы провели инвентаризацию и выявили недостатки своего\nхарактера, которые связывали нас так долго, не давая нам жить и получать\nрадость от жизни. Мы признались в этих недостатках, приняли за них\nответственность и стали искать направления и сил, которые нам необходимы для\nтого, чтобы жить по-другому. Наша домашняя группа дала нам особое тепло и\nподдержку, которые помогают нам жить в выздоровлении. И в довершение всего у\nнас есть любовь, забота и руководство Бога, к пониманию которого мы пришли в\nАН.\n\nВ ходе повседневного выздоровления мы обычно забываем, насколько сильно\nизменилась наша жизнь в Анонимных Наркоманах. До конца ли мы ценим то, что\nнаша программа дала нам?\n\n**ТОЛЬКО СЕГОДНЯ:** Выздоровление дало мне свободу. Я буду встречать день с\nнадеждой, благодарный за то, что сегодня все возможно.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };