import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Всякое происходит за день и плохое, и хорошее. Уделим время, чтобы оценить и\nто, и то другое, иначе мы можем упустить то, что поможет нашему духовному\nросту».</em></p>\n<p>IP No 8, «Только сегодня»</p>\n<p>Ответственность, ответственность — во всем мы несем ответственность за жизнь.\nМы «обязаны» пользоваться ремнями безопасности. Мы «обязаны» прибираться в\nдоме. Мы «обязаны» делать определенные вещи для своего супруга, детей, людей,\nдля которых мы являемся спонсорами. Кроме того, мы «обязаны» посещать собрания\nи как можно лучше следовать программе. Не удивительно, что иногда хочется\nсбежать от всех этих проблем и спрятаться на далеком острове, где мы ничего\nникому не «обязаны»!</p>\n<p>В такие моменты, когда мы перегружены обязанностями, мы забываем, что\nобязанности не должны быть в тягость. Когда у нас возникает желание сбежать от\nсвоей ответственности, нам надо не торопясь вспомнить, почему мы взяли на себя\nэту ответственность и что это нам дает. Работа ли это, которую мы вообще-то\nсчитаем интересной и перспективной, или партнер, который как личность нам не\nбезразличен, или ребенок, с которым мы вообще-то любим играть и заботиться о\nнем, — в любых жизненных обязанностях всегда находится доля радости.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Каждый миг в жизни неповторим. Я буду подходить к каждому\nмигу внимательно и с благодарностью за ответственность, которую я несу, и за\nособую радость, которую эта ответственность мне доставляет.</p>";

				const frontmatter = {"title":"26  ноября. Ответственность","description":"Ежедневные размышления АН - 26  ноября. Ответственность","id":"331","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/noyabr/daily_26-11.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Всякое происходит за день и плохое, и хорошее. Уделим время, чтобы оценить и\nто, и то другое, иначе мы можем упустить то, что поможет нашему духовному\nросту»._\n\nIP No 8, «Только сегодня»\n\nОтветственность, ответственность — во всем мы несем ответственность за жизнь.\nМы «обязаны» пользоваться ремнями безопасности. Мы «обязаны» прибираться в\nдоме. Мы «обязаны» делать определенные вещи для своего супруга, детей, людей,\nдля которых мы являемся спонсорами. Кроме того, мы «обязаны» посещать собрания\nи как можно лучше следовать программе. Не удивительно, что иногда хочется\nсбежать от всех этих проблем и спрятаться на далеком острове, где мы ничего\nникому не «обязаны»!\n\nВ такие моменты, когда мы перегружены обязанностями, мы забываем, что\nобязанности не должны быть в тягость. Когда у нас возникает желание сбежать от\nсвоей ответственности, нам надо не торопясь вспомнить, почему мы взяли на себя\nэту ответственность и что это нам дает. Работа ли это, которую мы вообще-то\nсчитаем интересной и перспективной, или партнер, который как личность нам не\nбезразличен, или ребенок, с которым мы вообще-то любим играть и заботиться о\nнем, — в любых жизненных обязанностях всегда находится доля радости.\n\n**ТОЛЬКО СЕГОДНЯ:** Каждый миг в жизни неповторим. Я буду подходить к каждому\nмигу внимательно и с благодарностью за ответственность, которую я несу, и за\nособую радость, которую эта ответственность мне доставляет.\n";
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
