import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы способны радоваться семейной жизни и можем стать опорой для своей семьи,\nвместо того, чтобы быть для нее бременем и помехой».</em></p>\n<p>Основной текст, с. 124</p>\n<p>Мы многое делаем для выздоровления, не так ли? Мы каждый день ходим на\nсобрания, каждый вечер проводим среди друзей в Сообществе и каждые выходные мы\nвырываемся на семинар по служению. Но если дома у нас все разваливается, то\nэто значит, что мы не так уж хорошо выздоравливаем.</p>\n<p>Нам хочется, чтобы в семье нас понимали. Кроме того, мы ведь больше не\nупотребляем наркотики. Почему же они не замечают, как мы меняемся в лучшую\nсторону? Неужели они не понимают, как важны для нас собрания, служение,\nобщение внутри Сообщества?</p>\n<p>Наши родные не оценят перемены, которые произошли в нашей жизни благодаря АН,\nдо тех пор, пока сами их не увидят. Если мы, бросая все, бежим на собрание,\nточно так же, как мы, бросая все, бежали употреблять наркотики, то, что\nизменилось? Если мы продолжаем игнорировать своих домочадцев и детей, не\nпринимаем свою ответственность в домашних делах, это значит, что мы не\n«применяем эти принципы во всех наших делах».</p>\n<p>Мы должны жить по программе везде, во всем, что мы делаем. Если мы хотим,\nчтобы наша духовная жизнь не была просто теорией, то нам надо и дома <em>жить</em>\nсогласно духовным принципам. Когда мы поступаем так, наши родные, с которыми\nмы живем, замечают перемены и испытывают благодарность за то, что мы нашли АН.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду продолжать выздоравливать и дома тоже.</p>";

				const frontmatter = {"title":"5 января.  Выздоровление дома","description":"Ежедневные размышления АН - 5 января.  Выздоровление дома","id":"5","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/yanvar/daily_05-01.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы способны радоваться семейной жизни и можем стать опорой для своей семьи,\nвместо того, чтобы быть для нее бременем и помехой»._\n\nОсновной текст, с. 124\n\nМы многое делаем для выздоровления, не так ли? Мы каждый день ходим на\nсобрания, каждый вечер проводим среди друзей в Сообществе и каждые выходные мы\nвырываемся на семинар по служению. Но если дома у нас все разваливается, то\nэто значит, что мы не так уж хорошо выздоравливаем.\n\nНам хочется, чтобы в семье нас понимали. Кроме того, мы ведь больше не\nупотребляем наркотики. Почему же они не замечают, как мы меняемся в лучшую\nсторону? Неужели они не понимают, как важны для нас собрания, служение,\nобщение внутри Сообщества?\n\nНаши родные не оценят перемены, которые произошли в нашей жизни благодаря АН,\nдо тех пор, пока сами их не увидят. Если мы, бросая все, бежим на собрание,\nточно так же, как мы, бросая все, бежали употреблять наркотики, то, что\nизменилось? Если мы продолжаем игнорировать своих домочадцев и детей, не\nпринимаем свою ответственность в домашних делах, это значит, что мы не\n«применяем эти принципы во всех наших делах».\n\nМы должны жить по программе везде, во всем, что мы делаем. Если мы хотим,\nчтобы наша духовная жизнь не была просто теорией, то нам надо и дома _жить_\nсогласно духовным принципам. Когда мы поступаем так, наши родные, с которыми\nмы живем, замечают перемены и испытывают благодарность за то, что мы нашли АН.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду продолжать выздоравливать и дома тоже.\n";
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
