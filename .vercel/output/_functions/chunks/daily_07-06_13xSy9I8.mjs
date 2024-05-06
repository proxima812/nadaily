import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Только сегодня я буду полагаться на кого-нибудь из Сообщества Анонимных\nНаркоманов, того, кто верит в меня и хочет помочь мне в моем выздоровлении».</em></p>\n<p>Основной текст, с. 120</p>\n<p>Не все из нас пришли в АН и сразу стали чистыми. Но если мы возвращаемся, то\nнаходим в АН поддержку, необходимую для нашего выздоровления. Оставаться\nчистыми гораздо проще, если есть кто-то, кто верит в нас, даже когда мы сами в\nсебя не верим.</p>\n<p>Даже у самого заядлого срывщика в АН обычно есть хотя бы один человек, который\nверит в него не смотря ни на что. Нам обязательно нужно найти такого человека\nили группу людей, которые верят в нас. Если мы спросим их, сможем ли мы когда-\nнибудь стать чистыми, они всегда ответят: «Да, ты можешь и ты будешь чистым.\nПросто возвращайся!».</p>\n<p>Нам всем нужен кто-то, кто бы в нас верил, особенно в те минуты, когда мы сами\nне можем себе доверять. Когда мы срываемся, мы подрываем свое только что\nобретенное доверие к себе, и нам становится так плохо, что мы почти полностью\nтеряем надежду. В такие времена нам необходима поддержка друзей по АН,\nнастроенных доброжелательно по отношению к нам. Они говорят, что этот срыв\nможет стать нашим последним срывом. Они по собственному опыту знают, что если\nмы будем продолжать приходить на собрания, то однажды мы станем чистыми, и\nбудем оставаться в чистоте.</p>\n<p>Многим из нас очень трудно поверить в себя. Но если кто-то любит нас\nбезусловной любовью, предлагая поддержку, не зависимо от того, сколько раз мы\nсрывались, выздоровление в АН становится для нас более реальным.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я найду кого-то, кто верит в меня. Я буду верить в него.</p>";

				const frontmatter = {"title":"7 июня. Кто-то, кто верит в меня","description":"Ежедневные размышления АН - 7 июня. Кто-то, кто верит в меня","id":"159","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_07-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Только сегодня я буду полагаться на кого-нибудь из Сообщества Анонимных\nНаркоманов, того, кто верит в меня и хочет помочь мне в моем выздоровлении»._\n\nОсновной текст, с. 120\n\nНе все из нас пришли в АН и сразу стали чистыми. Но если мы возвращаемся, то\nнаходим в АН поддержку, необходимую для нашего выздоровления. Оставаться\nчистыми гораздо проще, если есть кто-то, кто верит в нас, даже когда мы сами в\nсебя не верим.\n\nДаже у самого заядлого срывщика в АН обычно есть хотя бы один человек, который\nверит в него не смотря ни на что. Нам обязательно нужно найти такого человека\nили группу людей, которые верят в нас. Если мы спросим их, сможем ли мы когда-\nнибудь стать чистыми, они всегда ответят: «Да, ты можешь и ты будешь чистым.\nПросто возвращайся!».\n\nНам всем нужен кто-то, кто бы в нас верил, особенно в те минуты, когда мы сами\nне можем себе доверять. Когда мы срываемся, мы подрываем свое только что\nобретенное доверие к себе, и нам становится так плохо, что мы почти полностью\nтеряем надежду. В такие времена нам необходима поддержка друзей по АН,\nнастроенных доброжелательно по отношению к нам. Они говорят, что этот срыв\nможет стать нашим последним срывом. Они по собственному опыту знают, что если\nмы будем продолжать приходить на собрания, то однажды мы станем чистыми, и\nбудем оставаться в чистоте.\n\nМногим из нас очень трудно поверить в себя. Но если кто-то любит нас\nбезусловной любовью, предлагая поддержку, не зависимо от того, сколько раз мы\nсрывались, выздоровление в АН становится для нас более реальным.\n\n**ТОЛЬКО СЕГОДНЯ:** Я найду кого-то, кто верит в меня. Я буду верить в него.\n";
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
