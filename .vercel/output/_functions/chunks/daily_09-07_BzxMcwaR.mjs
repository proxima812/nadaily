import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«… пришло то время, когда истасканная старая ложь: «Кто однажды стал\nнаркоманом, тот всегда будет употреблять наркотики», больше не будет покорно\nприниматься обществом и самим наркоманом. Мы действительно выздоравливаем».</em></p>\n<p>Основной текст, с. 107</p>\n<p>Время от времени мы слышим, как спикеры говорят, что они до сих пор не до\nконца понимают духовные принципы. Они рассказывают нам, что если бы мы знали,\nчто происходит в их голове, то мы были бы поражены тем, насколько они все еще\nбезумны. Они рассказывают нам, что чем дольше они остаются чистыми, тем меньше\nони понимают что-либо. Когда те же самые спикеры открывают рот в следующий\nраз, они рассказывают о тех значительных переменах, которые выздоровление\nвнесло в их жизнь. Они проделали путь от полнейшего отчаяния до несгибаемой\nнадежды, от неконтролируемого употребления наркотиков до полного воздержания,\nот хронической неуправляемости до ответственности — и все это благодаря работе\nпо Двенадцати Шагам Анонимных Наркоманов. Какая из этих историй правдива? Так\nвыздоравливаем мы или нет?</p>\n<p>Мы можем думать, что демонстрируем смирение или благодарность, умаляя\nперемены, которые выздоровление привнесло в нашу жизнь. На самом же деле, мы\nсовершаем несправедливость по отношению к программе, когда ставим это чудо в\nзаслугу самим себе. Но мы совершаем равную несправедливость — по отношению к\nсебе и к тем, с кем мы делимся, — когда не признаем величины этого чуда.</p>\n<p>Мы действительно выздоравливаем. Если нам трудно разглядеть чудо\nвыздоровления, то нам следует приглядеться получше. Выздоровление существует и\nработает в Анонимных наркоманах — у ветеранов, у новичков, наводняющих наши\nсобрания, и, больше всего, у нас самих. Все, что нам надо сделать — это\nраскрыть глаза.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я признаю чудо моего выздоровления и буду благодарен за\nто, что обрел его.</p>";

				const frontmatter = {"title":"9 июля.  Мы действительно выздоравливаем!","description":"Ежедневные размышления АН - 9 июля.  Мы действительно выздоравливаем!","id":"191","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyul/daily_09-07.md";
				const url = undefined;
				function rawContent() {
					return "\n_«… пришло то время, когда истасканная старая ложь: «Кто однажды стал\nнаркоманом, тот всегда будет употреблять наркотики», больше не будет покорно\nприниматься обществом и самим наркоманом. Мы действительно выздоравливаем»._\n\nОсновной текст, с. 107\n\nВремя от времени мы слышим, как спикеры говорят, что они до сих пор не до\nконца понимают духовные принципы. Они рассказывают нам, что если бы мы знали,\nчто происходит в их голове, то мы были бы поражены тем, насколько они все еще\nбезумны. Они рассказывают нам, что чем дольше они остаются чистыми, тем меньше\nони понимают что-либо. Когда те же самые спикеры открывают рот в следующий\nраз, они рассказывают о тех значительных переменах, которые выздоровление\nвнесло в их жизнь. Они проделали путь от полнейшего отчаяния до несгибаемой\nнадежды, от неконтролируемого употребления наркотиков до полного воздержания,\nот хронической неуправляемости до ответственности — и все это благодаря работе\nпо Двенадцати Шагам Анонимных Наркоманов. Какая из этих историй правдива? Так\nвыздоравливаем мы или нет?\n\nМы можем думать, что демонстрируем смирение или благодарность, умаляя\nперемены, которые выздоровление привнесло в нашу жизнь. На самом же деле, мы\nсовершаем несправедливость по отношению к программе, когда ставим это чудо в\nзаслугу самим себе. Но мы совершаем равную несправедливость — по отношению к\nсебе и к тем, с кем мы делимся, — когда не признаем величины этого чуда.\n\nМы действительно выздоравливаем. Если нам трудно разглядеть чудо\nвыздоровления, то нам следует приглядеться получше. Выздоровление существует и\nработает в Анонимных наркоманах — у ветеранов, у новичков, наводняющих наши\nсобрания, и, больше всего, у нас самих. Все, что нам надо сделать — это\nраскрыть глаза.\n\n**ТОЛЬКО СЕГОДНЯ:** Я признаю чудо моего выздоровления и буду благодарен за\nто, что обрел его.\n";
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