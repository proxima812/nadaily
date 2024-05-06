import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Главной целью (Восьмого Шага) является то, что он помогает нам осознать, что\nмало-помалу мы начинаем относиться по-новому к самим себе и к тому, как мы\nпоступаем с другими людьми».</em></p>\n<p>Основной текст, сс. 47-48</p>\n<p>Для большинства из нас сказать «извините» — это не такая уж чуждая мысль. За\nвремя активной наркомании мы смогли слишком хорошо познакомиться с этой\nфразой. Мы вечно рассказывали людям, как мы виноваты, и были обычно глубоко\nудивлены, когда слышали в ответ на свои ничего не значащие извинения:\n«Конечно, ты виноват. На самом деле, эти твои вечные извинения тебя не\nоправдывают…». Это могло быть нашим первым открытием, что наше «извините» в\nдействительности ничего не меняло для тех людей, которым мы навредили,\nособенно если и мы, и они знали, что мы только что сделали опять то же самое.</p>\n<p>Многие из нас думали, что возмещение ущерба будет еще одним «извините».\nОднако, действия, которые мы предпринимаем по этим шагам, совершенно\nотличаются от данной фразы. Возмещать ущерб означает вносить изменения и,\nкроме всего прочего, поступать <em>правильно</em>. Если мы украли деньги, то мы не\nговорим просто: «Извините. Теперь я так больше не поступаю, потому что я\nчистый». Мы возвращаем деньги. Если мы пренебрегали своей семьей или\nоскорбляли ее, то мы не просто извиняемся. Мы начинаем обращаться с ней с\nуважением.</p>\n<p>Возмещение ущерба, который мы своим поведением нанесли себе и другим — это\nосновная цель работы по шагам. Теперь мы не просто «раскаиваемся»; мы берем на\nсебя ответственность.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я принимаю ответственность за себя и свое выздоровление.\nСегодня я возмещу какой-либо конкретный ущерб, в котором я раскаиваюсь.</p>";

				const frontmatter = {"title":"6 июля.  «Извините»","description":"Ежедневные размышления АН - 6 июля.  «Извините»","id":"188","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyul/daily_06-07.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Главной целью (Восьмого Шага) является то, что он помогает нам осознать, что\nмало-помалу мы начинаем относиться по-новому к самим себе и к тому, как мы\nпоступаем с другими людьми»._\n\nОсновной текст, сс. 47-48\n\nДля большинства из нас сказать «извините» — это не такая уж чуждая мысль. За\nвремя активной наркомании мы смогли слишком хорошо познакомиться с этой\nфразой. Мы вечно рассказывали людям, как мы виноваты, и были обычно глубоко\nудивлены, когда слышали в ответ на свои ничего не значащие извинения:\n«Конечно, ты виноват. На самом деле, эти твои вечные извинения тебя не\nоправдывают…». Это могло быть нашим первым открытием, что наше «извините» в\nдействительности ничего не меняло для тех людей, которым мы навредили,\nособенно если и мы, и они знали, что мы только что сделали опять то же самое.\n\nМногие из нас думали, что возмещение ущерба будет еще одним «извините».\nОднако, действия, которые мы предпринимаем по этим шагам, совершенно\nотличаются от данной фразы. Возмещать ущерб означает вносить изменения и,\nкроме всего прочего, поступать _правильно_. Если мы украли деньги, то мы не\nговорим просто: «Извините. Теперь я так больше не поступаю, потому что я\nчистый». Мы возвращаем деньги. Если мы пренебрегали своей семьей или\nоскорбляли ее, то мы не просто извиняемся. Мы начинаем обращаться с ней с\nуважением.\n\nВозмещение ущерба, который мы своим поведением нанесли себе и другим — это\nосновная цель работы по шагам. Теперь мы не просто «раскаиваемся»; мы берем на\nсебя ответственность.\n\n**ТОЛЬКО СЕГОДНЯ:** Я принимаю ответственность за себя и свое выздоровление.\nСегодня я возмещу какой-либо конкретный ущерб, в котором я раскаиваюсь.\n";
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
