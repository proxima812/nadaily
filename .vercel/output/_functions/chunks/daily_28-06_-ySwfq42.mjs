import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Работа с другими наркоманами — это лишь начало служения”.</em></p>\n<p>Основной текст, с. 70</p>\n<p>Служение требует беззаветной преданности делу несения вести все еще\nстрадающему наркоману. Но служение на этом не заканчивается. Служение также\nподразумевает, что нам надо следить за своим поведением и за собой. Служение\nставит нас на виду у всего сообщества. В АН легко стать «большой рыбой в\nмаленьком пруду». А такой контроль с нашей стороны может легко отвратить\nновичка.</p>\n<p>Выработка группового сознания — один из самых важных принципов служения. Не\nнадо забывать, что значение имеет то, что считает группа — групповое сознание,\nа не то, что я хочу или думаю. Мы выражаем свое мнение, делимся своими мыслями\nи тем самым участвуем в выработке группового сознания. После того как группа\nопределилась, выработалось групповое сознание, мы принимаем его как\nобязательное для себя. Смысл в том, чтобы работать во благо людям, а не в том,\nчтобы идти против интересов людей. Если мы не будем забывать, что мы вместе\nучаствуем в выработке группового сознания, нам будет ясно, что у каждой\nстороны есть хорошее. Как только прения прекратились, все стороны снова\nстановятся единым целым, и вместе несут выработанную совместными усилиями\nвесть.</p>\n<p>Часто так хочется думать, что я знаю, что для группы лучше. Но помните, что\nтолько когда мы не настаиваем на своем, только тогда служение становится\nтаким, каким ему полагается быть — способом нести весть наркоману, который все\nеще страдает.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я приму участие в выработке группового сознания. Я буду\nпомнить, что свет не перевернется от того, что я не настою на своем. Я буду\nвсегда помнить о своей основной цели, что бы я ни делал в порядке служения. Я\nпообщаюсь с новичком.</p>";

				const frontmatter = {"title":"28 июня. Групповое сознание","description":"Ежедневные размышления АН - 28 июня. Групповое сознание","id":"180","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_28-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Работа с другими наркоманами — это лишь начало служения”._\n\nОсновной текст, с. 70\n\nСлужение требует беззаветной преданности делу несения вести все еще\nстрадающему наркоману. Но служение на этом не заканчивается. Служение также\nподразумевает, что нам надо следить за своим поведением и за собой. Служение\nставит нас на виду у всего сообщества. В АН легко стать «большой рыбой в\nмаленьком пруду». А такой контроль с нашей стороны может легко отвратить\nновичка.\n\nВыработка группового сознания — один из самых важных принципов служения. Не\nнадо забывать, что значение имеет то, что считает группа — групповое сознание,\nа не то, что я хочу или думаю. Мы выражаем свое мнение, делимся своими мыслями\nи тем самым участвуем в выработке группового сознания. После того как группа\nопределилась, выработалось групповое сознание, мы принимаем его как\nобязательное для себя. Смысл в том, чтобы работать во благо людям, а не в том,\nчтобы идти против интересов людей. Если мы не будем забывать, что мы вместе\nучаствуем в выработке группового сознания, нам будет ясно, что у каждой\nстороны есть хорошее. Как только прения прекратились, все стороны снова\nстановятся единым целым, и вместе несут выработанную совместными усилиями\nвесть.\n\nЧасто так хочется думать, что я знаю, что для группы лучше. Но помните, что\nтолько когда мы не настаиваем на своем, только тогда служение становится\nтаким, каким ему полагается быть — способом нести весть наркоману, который все\nеще страдает.\n\n**ТОЛЬКО СЕГОДНЯ:** Я приму участие в выработке группового сознания. Я буду\nпомнить, что свет не перевернется от того, что я не настою на своем. Я буду\nвсегда помнить о своей основной цели, что бы я ни делал в порядке служения. Я\nпообщаюсь с новичком.\n";
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
