import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы понимаем: чтобы стать продуктивным, отвечающим за свои поступки\nчеловеком, нужно ставить выздоровление на первое место».</em></p>\n<p>Основной текст, с. 127</p>\n<p>Собрания были великолепны! Каждый вечер, когда мы приходили на собрание, мы\nсобирались вместе с другими наркоманами, чтобы поделиться опытом, силой и\nнадеждой. И каждый день мы использовали то, чему научились на собраниях, чтобы\nпродолжать свое выздоровление.</p>\n<p>А тем временем жизнь идет своим чередом. Работа, семья, друзья, школа, спорт,\nразвлечения, общественная деятельность, гражданский долг — все это требует\nнашего времени. Порой, требования, которые жизнь выдвигает нам каждый день,\nзаставляют нас спросить себя: «Сколько же еще мне нужно ходить на эти\nсобрания?».</p>\n<p>Давайте подумаем об этом. Могли ли мы оставаться чистыми сами по себе до\nприхода к Анонимным Наркоманам? Что же дает нам повод думать, что теперь мы\nсможем? Затем надо рассмотреть, что из себя представляет наша болезнь:\nхронический эгоцентризм, подверженность наваждению, компульсивное поведение.\nВсе эти черты проявляются во многих сферах нашей жизни. Так можем ли мы жить и\nрадоваться жизни, не оказывая эффективного воздействия на нашу болезнь? Нет.</p>\n<p>«Обычным» людям можно не волноваться о таких вещах, но мы не «обычные» люди,\nмы — наркоманы. Мы не можем притвориться, что у нас нет хронического и\nнеизлечимого заболевания, потому что оно у нас есть. Без программы мы можем\nпросто не выжить, и тогда нам не надо будет переживать по поводу работы,\nшколы, семьи и всего остального. Собрания АН дают нам поддержку и направление,\nнеобходимые, чтобы выздоравливать от нашей наркомании. Эти собрания позволяют\nнам жить настолько полноценно, насколько это только возможно.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я хочу жить и радоваться жизни. Чтобы сделать это, я\nпоставлю свое выздоровление во главу угла.</p>";

				const frontmatter = {"title":"18 августа.  «Сколько еще мне нужно ходить?»","description":"Ежедневные размышления АН - 18 августа.  «Сколько еще мне нужно ходить?»","id":"231","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_18-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы понимаем: чтобы стать продуктивным, отвечающим за свои поступки\nчеловеком, нужно ставить выздоровление на первое место»._\n\nОсновной текст, с. 127\n\nСобрания были великолепны! Каждый вечер, когда мы приходили на собрание, мы\nсобирались вместе с другими наркоманами, чтобы поделиться опытом, силой и\nнадеждой. И каждый день мы использовали то, чему научились на собраниях, чтобы\nпродолжать свое выздоровление.\n\nА тем временем жизнь идет своим чередом. Работа, семья, друзья, школа, спорт,\nразвлечения, общественная деятельность, гражданский долг — все это требует\nнашего времени. Порой, требования, которые жизнь выдвигает нам каждый день,\nзаставляют нас спросить себя: «Сколько же еще мне нужно ходить на эти\nсобрания?».\n\nДавайте подумаем об этом. Могли ли мы оставаться чистыми сами по себе до\nприхода к Анонимным Наркоманам? Что же дает нам повод думать, что теперь мы\nсможем? Затем надо рассмотреть, что из себя представляет наша болезнь:\nхронический эгоцентризм, подверженность наваждению, компульсивное поведение.\nВсе эти черты проявляются во многих сферах нашей жизни. Так можем ли мы жить и\nрадоваться жизни, не оказывая эффективного воздействия на нашу болезнь? Нет.\n\n«Обычным» людям можно не волноваться о таких вещах, но мы не «обычные» люди,\nмы — наркоманы. Мы не можем притвориться, что у нас нет хронического и\nнеизлечимого заболевания, потому что оно у нас есть. Без программы мы можем\nпросто не выжить, и тогда нам не надо будет переживать по поводу работы,\nшколы, семьи и всего остального. Собрания АН дают нам поддержку и направление,\nнеобходимые, чтобы выздоравливать от нашей наркомании. Эти собрания позволяют\nнам жить настолько полноценно, насколько это только возможно.\n\n**ТОЛЬКО СЕГОДНЯ:** Я хочу жить и радоваться жизни. Чтобы сделать это, я\nпоставлю свое выздоровление во главу угла.\n";
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