import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы боялись, что если когда-нибудь откроем свою душу, то будем наверняка\nотвергнуты”.</em></p>\n<p>Основной текст, с. 39</p>\n<p>Иметь взаимоотношения без барьеров, когда мы можем быть полностью открытыми в\nотношении своих чувств, — это то, о чем мечтают многие из нас. В то же самое\nвремя, возможность подобной близости вызывает у нас больше страха, чем любая\nдругая жизненная ситуация.</p>\n<p>Когда мы исследуем свой страх, нам обычно становится ясно обычно, что мы\nпытаемся скрыть те стороны своей личности, которых стыдимся, то в чем мы даже\nи себе до сих пор не признались. Мы не хотим, чтобы другие знали о нашей\nнеуверенности, боли, желаниях и поэтому просто отказываемся их проявлять. Мы\nможем решить, что, если никто не узнает о наших недостатках, они перестанут\nсуществовать.</p>\n<p>Это камень преткновения в наших отношениях. Кто бы ни входил в нашу жизнь, мы\nне позволяем ему переступить границу, за которой начинаются наши секреты.\nЧтобы поддерживать близость в отношениях, важно признавать свои недостатки и\nпринимать их. Когда мы это сделаем, крепость отрицания, возведенная для того,\nчтобы хранить эти вещи скрытыми, будет разрушена, и у нас появится возможность\nстроить отношения с другими людьми.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> У меня есть возможности открыться. Я воспользуюсь этими\nвозможностями и сближусь с тем, кого люблю.</p>";

				const frontmatter = {"title":"28 июля. Секреты и близость","description":"Ежедневные размышления АН - 28 июля. Секреты и близость","id":"210","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyul/daily_28-07.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы боялись, что если когда-нибудь откроем свою душу, то будем наверняка\nотвергнуты”._\n\nОсновной текст, с. 39\n\nИметь взаимоотношения без барьеров, когда мы можем быть полностью открытыми в\nотношении своих чувств, — это то, о чем мечтают многие из нас. В то же самое\nвремя, возможность подобной близости вызывает у нас больше страха, чем любая\nдругая жизненная ситуация.\n\nКогда мы исследуем свой страх, нам обычно становится ясно обычно, что мы\nпытаемся скрыть те стороны своей личности, которых стыдимся, то в чем мы даже\nи себе до сих пор не признались. Мы не хотим, чтобы другие знали о нашей\nнеуверенности, боли, желаниях и поэтому просто отказываемся их проявлять. Мы\nможем решить, что, если никто не узнает о наших недостатках, они перестанут\nсуществовать.\n\nЭто камень преткновения в наших отношениях. Кто бы ни входил в нашу жизнь, мы\nне позволяем ему переступить границу, за которой начинаются наши секреты.\nЧтобы поддерживать близость в отношениях, важно признавать свои недостатки и\nпринимать их. Когда мы это сделаем, крепость отрицания, возведенная для того,\nчтобы хранить эти вещи скрытыми, будет разрушена, и у нас появится возможность\nстроить отношения с другими людьми.\n\n**ТОЛЬКО СЕГОДНЯ:** У меня есть возможности открыться. Я воспользуюсь этими\nвозможностями и сближусь с тем, кого люблю.\n";
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
