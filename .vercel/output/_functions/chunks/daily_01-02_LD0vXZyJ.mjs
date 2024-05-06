import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы чувствовали, что не такие, как все… Только после этого (капитуляции) мы\nсможем преодолеть отчуждение”.</em></p>\n<p>Основной текст, с. 27</p>\n<p>“Но вы не понимаете!”, — говорили мы, запинаясь и пытаясь оправдаться. “Я не\nтакой! Просто мне на самом деле очень тяжело”. Мы использовали эти оправдания\nочень часто во время активного употребления, чтобы не отвечать за последствия\nсвоих действий или чтобы на нас не распространялись законы, которые действуют\nдля всех остальных. Возможно, мы выкрикивали те же самые слова на нашем первом\nсобрании. Может быть, даже совсем недавно мы хныкали об этом.</p>\n<p>Очень многие из нас чувствуют себя единственными в своем роде, чувствуют, что\nмы-то совсем другие. Поскольку мы — наркоманы, то можем использовать что\nугодно, лишь бы отстраниться от окружающих. Но не существует такой причины, по\nкоторой мы могли бы отказаться от выздоровления. Нет такой причины, которая бы\nзабраковала нас для программы — ни хроническое заболевание, ни нищета, ни что-\nто иное. Тысячи наркоманов нашли выздоровление, несмотря на огромные жизненные\nтрудности. Благодаря работе по программе они получили духовный рост — в ответ\nна свои трудности.</p>\n<p>Наши личные обстоятельства и отличия не имеют значения для выздоровления.\nОтказываясь от отчуждения, капитулируя и обращаясь к этому простому жизненному\nпути, мы обнаруживаем, что являемся частью какого-то целого. Это чувство\nсопричастности дает нам силы, чтобы жить и справляться с трудностями.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я откажусь от отчуждения и приму принципы выздоровления,\nобщие для всех нас. Мои трудности не помешают моему выздоровлению, более того,\nони станут стимулом для него.</p>";

				const frontmatter = {"title":"1 февраля. Трудности","description":"Ежедневные размышления АН - 1 февраля. Трудности","id":"32","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/fevral/daily_01-02.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы чувствовали, что не такие, как все… Только после этого (капитуляции) мы\nсможем преодолеть отчуждение”._\n\nОсновной текст, с. 27\n\n“Но вы не понимаете!”, — говорили мы, запинаясь и пытаясь оправдаться. “Я не\nтакой! Просто мне на самом деле очень тяжело”. Мы использовали эти оправдания\nочень часто во время активного употребления, чтобы не отвечать за последствия\nсвоих действий или чтобы на нас не распространялись законы, которые действуют\nдля всех остальных. Возможно, мы выкрикивали те же самые слова на нашем первом\nсобрании. Может быть, даже совсем недавно мы хныкали об этом.\n\nОчень многие из нас чувствуют себя единственными в своем роде, чувствуют, что\nмы-то совсем другие. Поскольку мы — наркоманы, то можем использовать что\nугодно, лишь бы отстраниться от окружающих. Но не существует такой причины, по\nкоторой мы могли бы отказаться от выздоровления. Нет такой причины, которая бы\nзабраковала нас для программы — ни хроническое заболевание, ни нищета, ни что-\nто иное. Тысячи наркоманов нашли выздоровление, несмотря на огромные жизненные\nтрудности. Благодаря работе по программе они получили духовный рост — в ответ\nна свои трудности.\n\nНаши личные обстоятельства и отличия не имеют значения для выздоровления.\nОтказываясь от отчуждения, капитулируя и обращаясь к этому простому жизненному\nпути, мы обнаруживаем, что являемся частью какого-то целого. Это чувство\nсопричастности дает нам силы, чтобы жить и справляться с трудностями.\n\n**ТОЛЬКО СЕГОДНЯ:** Я откажусь от отчуждения и приму принципы выздоровления,\nобщие для всех нас. Мои трудности не помешают моему выздоровлению, более того,\nони станут стимулом для него.\n";
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