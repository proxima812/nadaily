import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Двенадцать шагов Анонимных Наркоманов – это прогрессирующий процесс\nвыздоровления, воплощенный в нашей повседневной жизни».</em></p>\n<p>Основной текст, сс. 119-120</p>\n<p>После некоторого времени выздоровления мы можем обнаружить, что на нас прямо-\nтаки обрушивается шквал личных проблем, появляются чувства злости и отчаяния.\nКогда мы видим, что такое происходит, мы жалуемся: «Я же старался изо всех\nсил. Я думал, что уже…». Выздоровел, может быть? Не тут-то было. Снова и снова\nмы слышим, что выздоровление – это непрерывный процесс, и мы никогда не сможем\nсказать, что вылечились полностью. Все же иногда нам кажется, что стоит только\nпросто как следует поработать по шагам, как следует помолиться, посетить\nдостаточно собраний, и мы в один прекрасный момент… ну, может быть, и не\n<em>вылечимся</em> , но <em>что-то</em> с нами произойдет!</p>\n<p>«Что-то» с нами уже происходит. Мы выздоравливаем – выздоравливаем от\nактивного употребления наркотиков. Не зависимо от того, с чем мы справились в\nпроцессе работы по шагам, всегда будет над чем еще поработать. То, что мы не\nвспомнили или не сочли важным при первой инвентаризации, впоследствии\nобязательно проявится. Снова и снова мы будем обращаться к процессу работу по\nшагам, чтобы понять, что нас беспокоит. Чем больше мы будем заниматься этим\nпроцессом, тем больше мы будем испытывать к нему доверия, потому что мы будем\nвидеть результаты. Мы проделываем путь от гнева и обиды к прощению, от\nотрицания к честности и принятию, от страдания к душевному покою.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду делать, что могу, для своего выздоровления сегодня,\nи буду продолжать верить в непрерывный процесс выздоровления.</p>";

				const frontmatter = {"title":"6 июня. Выздоровление наступает не за один день","description":"Ежедневные размышления АН - 6 июня. Выздоровление наступает не за один день","id":"158","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_06-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Двенадцать шагов Анонимных Наркоманов – это прогрессирующий процесс\nвыздоровления, воплощенный в нашей повседневной жизни»._\n\nОсновной текст, сс. 119-120\n\nПосле некоторого времени выздоровления мы можем обнаружить, что на нас прямо-\nтаки обрушивается шквал личных проблем, появляются чувства злости и отчаяния.\nКогда мы видим, что такое происходит, мы жалуемся: «Я же старался изо всех\nсил. Я думал, что уже…». Выздоровел, может быть? Не тут-то было. Снова и снова\nмы слышим, что выздоровление – это непрерывный процесс, и мы никогда не сможем\nсказать, что вылечились полностью. Все же иногда нам кажется, что стоит только\nпросто как следует поработать по шагам, как следует помолиться, посетить\nдостаточно собраний, и мы в один прекрасный момент… ну, может быть, и не\n_вылечимся_ , но _что-то_ с нами произойдет!\n\n«Что-то» с нами уже происходит. Мы выздоравливаем – выздоравливаем от\nактивного употребления наркотиков. Не зависимо от того, с чем мы справились в\nпроцессе работы по шагам, всегда будет над чем еще поработать. То, что мы не\nвспомнили или не сочли важным при первой инвентаризации, впоследствии\nобязательно проявится. Снова и снова мы будем обращаться к процессу работу по\nшагам, чтобы понять, что нас беспокоит. Чем больше мы будем заниматься этим\nпроцессом, тем больше мы будем испытывать к нему доверия, потому что мы будем\nвидеть результаты. Мы проделываем путь от гнева и обиды к прощению, от\nотрицания к честности и принятию, от страдания к душевному покою.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду делать, что могу, для своего выздоровления сегодня,\nи буду продолжать верить в непрерывный процесс выздоровления.\n";
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