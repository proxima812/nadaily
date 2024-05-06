import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Не имеет значения, откуда мы пришли, важно куда мы идем.”</em></p>\n<p>Основной текст, с.30</p>\n<p>Когда мы впервые ощущаем признаки выздоровления, некоторые из нас начинают\nстыдится называть себя «наркоманами». На первых этапах выздоровления нас может\nпереполнять одновременно страх и надежда, когда мы пытаемся найти новый смысл\nв жизни. Прошлое может казаться неиcправимым и непреодолимым. Может быть очень\nтрудно думать о себе как-то по-другому, не так как мы привыкли.</p>\n<p>Наша память о прошлом может служить нам напоминанием о том, что нас ожидает,\nесли мы будем снова употреблять наркотики, и одновременно держать нас в оковах\nстыда и страха. И все же, хотя нам порой очень трудно отпустить навязчивые\nмысли о прошлом, каждый день выздоровления может уводить нас все дальше от\nактивной наркомании. С каждым днем у нас может становиться все больше того, о\nчем мы мечтаем, и меньше того, за что себя трудно простить.</p>\n<p>В выздоровлении все двери для нас открыты. У нас большой выбор. Наша новая\nжизнь богата и многообещающа. Хотя мы не можем забыть прошлого, нам нет\nнеобходимости жить прошлым. Мы можем двигаться вперед.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я упакую чемоданы и уеду из своего прошлого в настоящее,\nполное надежд.</p>";

				const frontmatter = {"title":"24 марта. Отпуская навязчивые мысли о прошлом","description":"Ежедневные размышления АН - 24 марта. Отпуская навязчивые мысли о прошлом","id":"84","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/mart/daily_24-03.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Не имеет значения, откуда мы пришли, важно куда мы идем.”_\n\nОсновной текст, с.30\n\nКогда мы впервые ощущаем признаки выздоровления, некоторые из нас начинают\nстыдится называть себя «наркоманами». На первых этапах выздоровления нас может\nпереполнять одновременно страх и надежда, когда мы пытаемся найти новый смысл\nв жизни. Прошлое может казаться неиcправимым и непреодолимым. Может быть очень\nтрудно думать о себе как-то по-другому, не так как мы привыкли.\n\nНаша память о прошлом может служить нам напоминанием о том, что нас ожидает,\nесли мы будем снова употреблять наркотики, и одновременно держать нас в оковах\nстыда и страха. И все же, хотя нам порой очень трудно отпустить навязчивые\nмысли о прошлом, каждый день выздоровления может уводить нас все дальше от\nактивной наркомании. С каждым днем у нас может становиться все больше того, о\nчем мы мечтаем, и меньше того, за что себя трудно простить.\n\nВ выздоровлении все двери для нас открыты. У нас большой выбор. Наша новая\nжизнь богата и многообещающа. Хотя мы не можем забыть прошлого, нам нет\nнеобходимости жить прошлым. Мы можем двигаться вперед.\n\n**ТОЛЬКО СЕГОДНЯ:** Я упакую чемоданы и уеду из своего прошлого в настоящее,\nполное надежд.\n";
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
