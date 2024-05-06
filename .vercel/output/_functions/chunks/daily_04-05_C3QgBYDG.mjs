import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«У каждой группы есть лишь одна главная цель — нести нашу весть о\nвыздоровлении тем наркоманам, которые все еще страдают».</em></p>\n<p>Пятая традиция</p>\n<p>Домашняя группа для нас много значит. В конце концов, где бы мы были если бы\nне любимые собрания АН? Группа иногда организует пикник или другие\nмероприятия. Часто члены домашней группы ходят вместе в кино или играют в\nбоулинг. Мы все стали хорошими друзьями благодаря домашней группе, и мы ни на\nчто в мире не променяем эту теплоту.</p>\n<p>Но иногда надо проводить инвентаризацию того, что делает группа, чтобы\nвыполнить свою основную цель — нести весть наркоману, который все еще\nстрадает. Порой, мы приходим на собрание, где знаем почти всех, и сразу\nоказываемся в обстановке смеха и веселья. Но как насчет новичка? Не забываем\nли мы подойти к вновь пришедшим людям, которые может быть сидят в сторонке,\nодинокие и напуганные? Помним ли мы, что надо поприветствовать тех, кто пришел\nна группу?</p>\n<p>Любовь, царящая у Анонимных Наркоманов, помогает нам выздоравливать от\nзависимости. Но когда мы уже стали чистыми, не надо забывать отдавать то, что\nнам самим было свободно дано. Нам надо протянуть руку наркоману, который все\nеще страдает. Кроме всего прочего, «новичок самый важный человек на <em>любом</em>\nсобрании».</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я благодарен за тепло сообщества, которое я обрел в моей\nдомашней группе. Я протяну руку наркоману, который все еще страдает, предлагая\nдругим разделить это тепло сообщества.</p>";

				const frontmatter = {"title":"4 мая. «Как насчет новичка?»","description":"Ежедневные размышления АН - 4 мая. «Как насчет новичка?»","id":"125","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_04-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_«У каждой группы есть лишь одна главная цель — нести нашу весть о\nвыздоровлении тем наркоманам, которые все еще страдают»._\n\nПятая традиция\n\nДомашняя группа для нас много значит. В конце концов, где бы мы были если бы\nне любимые собрания АН? Группа иногда организует пикник или другие\nмероприятия. Часто члены домашней группы ходят вместе в кино или играют в\nбоулинг. Мы все стали хорошими друзьями благодаря домашней группе, и мы ни на\nчто в мире не променяем эту теплоту.\n\nНо иногда надо проводить инвентаризацию того, что делает группа, чтобы\nвыполнить свою основную цель — нести весть наркоману, который все еще\nстрадает. Порой, мы приходим на собрание, где знаем почти всех, и сразу\nоказываемся в обстановке смеха и веселья. Но как насчет новичка? Не забываем\nли мы подойти к вновь пришедшим людям, которые может быть сидят в сторонке,\nодинокие и напуганные? Помним ли мы, что надо поприветствовать тех, кто пришел\nна группу?\n\nЛюбовь, царящая у Анонимных Наркоманов, помогает нам выздоравливать от\nзависимости. Но когда мы уже стали чистыми, не надо забывать отдавать то, что\nнам самим было свободно дано. Нам надо протянуть руку наркоману, который все\nеще страдает. Кроме всего прочего, «новичок самый важный человек на _любом_\nсобрании».\n\n**ТОЛЬКО СЕГОДНЯ:** Я благодарен за тепло сообщества, которое я обрел в моей\nдомашней группе. Я протяну руку наркоману, который все еще страдает, предлагая\nдругим разделить это тепло сообщества.\n";
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
