import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Многие из нас молятся, когда нам плохо. Мы узнаем, что если мы молимся\nрегулярно, мы уже не страдаем так часто и так сильно».</em></p>\n<p>Основной текст, с. 55</p>\n<p>Регулярная молитва и медитация — это еще два ключевых элемента в нашем новом\nобразе жизни. Наша активная наркомания была не просто вредной привычкой, от\nкоторой можно избавиться с помощью силы воли. Наша наркомания была негативной,\nистощающей зависимостью, которая отнимала всю нашу позитивную энергию. Эта\nзависимость была настолько подавляющей, что она абсолютно не позволяла нам\nразвивать какие бы то ни было отношения с Высшей Силой.</p>\n<p>С самого начала нашего выздоровления Высшая Сила стала той силой, которая\nпринесла нам свободу. Сначала она освободила нас от нашего компульсивного\nупотребления наркотиков, и хотя мы знали, что наркотики убивают нас, но сами\nне могли остановиться. Затем она дала нам свободу от более глубоко затаившихся\nаспектов нашей болезни. Высшая Сила дала нам направление, силу и мужество,\nчтобы исследовать себя; чтобы, возможно, в первый раз вслух признаться перед\nдругим человеком в том, какой была наша жизнь; чтобы начать искать\nосвобождение от дефектов нашего характера, которые лежат в основе наших\nпроблем; и, наконец, чтобы возместить ущерб, который мы причинили.</p>\n<p>Этот первый контакт с Высшей Силой и эта первая свобода переросли в\nполноценную свободную жизнь. Мы поддерживаем свою свободу, поддерживая и\nулучшая свой осознанный контакт с Высшей Силой посредством регулярной молитвы\nи медитации.</p>\n<p><strong>ТОЛЬКО СЕОДНЯ:</strong> Я приму на себя обязательство включить регулярную молитву и\nмедитацию в свой новый образ жизни.</p>";

				const frontmatter = {"title":"10 августа.  Регулярная молитва и медитация","description":"Ежедневные размышления АН - 10 августа.  Регулярная молитва и медитация","id":"223","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_10-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Многие из нас молятся, когда нам плохо. Мы узнаем, что если мы молимся\nрегулярно, мы уже не страдаем так часто и так сильно»._\n\nОсновной текст, с. 55\n\nРегулярная молитва и медитация — это еще два ключевых элемента в нашем новом\nобразе жизни. Наша активная наркомания была не просто вредной привычкой, от\nкоторой можно избавиться с помощью силы воли. Наша наркомания была негативной,\nистощающей зависимостью, которая отнимала всю нашу позитивную энергию. Эта\nзависимость была настолько подавляющей, что она абсолютно не позволяла нам\nразвивать какие бы то ни было отношения с Высшей Силой.\n\nС самого начала нашего выздоровления Высшая Сила стала той силой, которая\nпринесла нам свободу. Сначала она освободила нас от нашего компульсивного\nупотребления наркотиков, и хотя мы знали, что наркотики убивают нас, но сами\nне могли остановиться. Затем она дала нам свободу от более глубоко затаившихся\nаспектов нашей болезни. Высшая Сила дала нам направление, силу и мужество,\nчтобы исследовать себя; чтобы, возможно, в первый раз вслух признаться перед\nдругим человеком в том, какой была наша жизнь; чтобы начать искать\nосвобождение от дефектов нашего характера, которые лежат в основе наших\nпроблем; и, наконец, чтобы возместить ущерб, который мы причинили.\n\nЭтот первый контакт с Высшей Силой и эта первая свобода переросли в\nполноценную свободную жизнь. Мы поддерживаем свою свободу, поддерживая и\nулучшая свой осознанный контакт с Высшей Силой посредством регулярной молитвы\nи медитации.\n\n**ТОЛЬКО СЕОДНЯ:** Я приму на себя обязательство включить регулярную молитву и\nмедитацию в свой новый образ жизни.\n";
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
