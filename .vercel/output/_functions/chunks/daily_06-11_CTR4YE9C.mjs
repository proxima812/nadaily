import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Смирение — это результат того, что мы стали честными перед собою».</em></p>\n<p>Основной текст, с. 43</p>\n<p>Смирение было настолько непонятным понятием для многих из нас, что мы\nстарались не обращать на него внимания как можно дольше. Когда мы впервые\nувидели слово «смиренно» в начале Седьмого Шага, мы могли подумать, что нам\nпредлагают еще немного унижения. Возможно, мы все же решили посмотреть\nзначение этого слова в словаре и только впали в еще большую растерянность. Мы\nникак не могли взять в толк, каким образом «низкое положение и раболепие»\nприменяются в выздоровлении.</p>\n<p>Быть смиренным не означает занимать самую низкую жизненную позицию. Напротив,\nстать смиренными значит выработать реалистичный взгляд на себя и свое место в\nмире. Мы приобретаем жизненную мудрость, основанную на принятии всех сторон\nсвоей личности. Мы не преуменьшаем наших хороших качеств и не преувеличиваем\nдефектов. Мы честно принимаем себя такими, какие мы есть.</p>\n<p>Ни один из нас никогда не достигнет состояния совершенного смирения. Но мы\nточно уж можем стремиться к тому, чтобы честно признавать свою вину, принимать\nсвои ценные качества и полагаться на Высшую Силу, как на источник сил.\nСмирение не означает, что мы должны ползти по дороге жизни на коленях; оно\nвсего лишь означает, что мы должны признать, что не можем выздоравливать\nсамостоятельно. Мы нужны друг другу и, кроме всего прочего, нам нужна сила\nлюбящего Бога.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Чтобы стать смиренным, я честно приму все черты моего\nхарактера и увижу свое истинное место в мире. Я буду полагаться на Бога, как я\nего понимаю, чтобы он дал мне сил заполнить это место.</p>";

				const frontmatter = {"title":"6 ноября.  Понимание смирения","description":"Ежедневные размышления АН - 6 ноября.  Понимание смирения","id":"311","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/noyabr/daily_06-11.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Смирение — это результат того, что мы стали честными перед собою»._\n\nОсновной текст, с. 43\n\nСмирение было настолько непонятным понятием для многих из нас, что мы\nстарались не обращать на него внимания как можно дольше. Когда мы впервые\nувидели слово «смиренно» в начале Седьмого Шага, мы могли подумать, что нам\nпредлагают еще немного унижения. Возможно, мы все же решили посмотреть\nзначение этого слова в словаре и только впали в еще большую растерянность. Мы\nникак не могли взять в толк, каким образом «низкое положение и раболепие»\nприменяются в выздоровлении.\n\nБыть смиренным не означает занимать самую низкую жизненную позицию. Напротив,\nстать смиренными значит выработать реалистичный взгляд на себя и свое место в\nмире. Мы приобретаем жизненную мудрость, основанную на принятии всех сторон\nсвоей личности. Мы не преуменьшаем наших хороших качеств и не преувеличиваем\nдефектов. Мы честно принимаем себя такими, какие мы есть.\n\nНи один из нас никогда не достигнет состояния совершенного смирения. Но мы\nточно уж можем стремиться к тому, чтобы честно признавать свою вину, принимать\nсвои ценные качества и полагаться на Высшую Силу, как на источник сил.\nСмирение не означает, что мы должны ползти по дороге жизни на коленях; оно\nвсего лишь означает, что мы должны признать, что не можем выздоравливать\nсамостоятельно. Мы нужны друг другу и, кроме всего прочего, нам нужна сила\nлюбящего Бога.\n\n**ТОЛЬКО СЕГОДНЯ:** Чтобы стать смиренным, я честно приму все черты моего\nхарактера и увижу свое истинное место в мире. Я буду полагаться на Бога, как я\nего понимаю, чтобы он дал мне сил заполнить это место.\n";
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