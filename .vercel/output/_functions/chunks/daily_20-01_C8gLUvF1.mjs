import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Сообщество Анонимных Наркоманов дает только одно обещание, а именно:\nизбавление от необходимости употреблять наркотики…».</em></p>\n<p>Основной текст, с. 127</p>\n<p>Представьте, как бы это выглядело, если бы мы пришли на группу Анонимных\nНаркоманов, в отчаянии, желая лишь одного — прекратить употреблять наркотики,\nа там бы нас встретила такая реклама: «Если только вы будете работать по Шагам\nи не будете употреблять наркотики, вы женитесь (выйдете замуж), будете жить в\nзагородном доме, у вас будет 2,6 детей, и вы начнете носить одежду из\nполиэстера. Вы станете ответственным, продуктивным членом общества, и вас\nбудет обслуживать компания, обслуживающая королей и президентов. Вы будете\nбогаты, и у вас будет динамичная карьера». Большинство из нас, встретив такую\nтяжеловесную агитацию, вскрикнули и бросились поскорее к дверям.</p>\n<p>Вместо этой высокопарной бессмыслицы и пугающих предсказаний нам при встрече\nдают только одно обещание — нам дают надежду на освобождение от активной\nнаркомании. Мы чувствуем, как долгожданное облегчение приходит к нам, когда мы\nслышим, что нам больше никогда не нужно снова употреблять наркотики. И никто\nне собирается заставлять нас становиться кем-то!</p>\n<p>Конечно, после некоторого времени выздоровления прекрасные вещи начинают\nпроисходить в нашей жизни. Нам посылаются подарки — духовные и материальные —\nподарки, о которых мы столько мечтали, но никогда не допускали даже мысли\nполучить их. Это, однако, настоящие подарки, они не были обещаны нам только\nпотому, что мы стали членами АН. Все, что нам обещают — это свобода от\nнаркомании, и этого более чем достаточно!</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Мне была обещана свобода от активной наркомании. Подарки,\nкоторые я получаю — это плоды моего выздоровления.</p>";

				const frontmatter = {"title":"20 января.   Всего одно обещание и много подарков","description":"Ежедневные размышления АН - 20 января.   Всего одно обещание и много подарков","id":"20","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/yanvar/daily_20-01.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Сообщество Анонимных Наркоманов дает только одно обещание, а именно:\nизбавление от необходимости употреблять наркотики…»._\n\nОсновной текст, с. 127\n\nПредставьте, как бы это выглядело, если бы мы пришли на группу Анонимных\nНаркоманов, в отчаянии, желая лишь одного — прекратить употреблять наркотики,\nа там бы нас встретила такая реклама: «Если только вы будете работать по Шагам\nи не будете употреблять наркотики, вы женитесь (выйдете замуж), будете жить в\nзагородном доме, у вас будет 2,6 детей, и вы начнете носить одежду из\nполиэстера. Вы станете ответственным, продуктивным членом общества, и вас\nбудет обслуживать компания, обслуживающая королей и президентов. Вы будете\nбогаты, и у вас будет динамичная карьера». Большинство из нас, встретив такую\nтяжеловесную агитацию, вскрикнули и бросились поскорее к дверям.\n\nВместо этой высокопарной бессмыслицы и пугающих предсказаний нам при встрече\nдают только одно обещание — нам дают надежду на освобождение от активной\nнаркомании. Мы чувствуем, как долгожданное облегчение приходит к нам, когда мы\nслышим, что нам больше никогда не нужно снова употреблять наркотики. И никто\nне собирается заставлять нас становиться кем-то!\n\nКонечно, после некоторого времени выздоровления прекрасные вещи начинают\nпроисходить в нашей жизни. Нам посылаются подарки — духовные и материальные —\nподарки, о которых мы столько мечтали, но никогда не допускали даже мысли\nполучить их. Это, однако, настоящие подарки, они не были обещаны нам только\nпотому, что мы стали членами АН. Все, что нам обещают — это свобода от\nнаркомании, и этого более чем достаточно!\n\n**ТОЛЬКО СЕГОДНЯ:** Мне была обещана свобода от активной наркомании. Подарки,\nкоторые я получаю — это плоды моего выздоровления.\n";
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
