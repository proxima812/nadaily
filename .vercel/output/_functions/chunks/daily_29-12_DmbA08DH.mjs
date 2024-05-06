import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Когда кто-нибудь указывает на наши недостатки, первой реакцией может быть\nзащита… Если мы действительно хотим быть свободными, то будем без\nпредубеждения относиться к замечаниям своих друзей-наркоманов».</em></p>\n<p>Основной текст, с. 44</p>\n<p>В какой-то момент нашего выздоровления мы приходим к осознанию того, что\nдругие могут видеть нас совершенно иначе, чем мы сами себя представляем. Мы,\nвозможно, совсем не такие плохие и не такие хорошие, не такие красивые и не\nтакие ужасные, какими кажемся себе — но мы слишком закрыты в себе, чтобы знать\nс уверенностью, какие мы. И вот тут-то нам могут помочь наши программные\nдрузья, которые делятся с нами тем, что они видят в нас. Они рассказывают нам\nо тех хороших сторонах нас самих, которых мы, возможно, не знаем — и они\nрассказывают нам также о тех плохих чертах, которые мы, может быть, не в\nсостоянии заметить.</p>\n<p>У нас может возникнуть защитная реакция на такую «помощь» — а в некоторых\nслучаях это единственно возможная реакция. Однако, даже какие-то злобные\nзамечания о наших недостатках могут пролить свет на те аспекты нашего\nвыздоровления, которые мы сами не можем видеть. От кого бы ни поступило такое\nполезное замечание, с какой бы целью оно ни было сделано, мы в любом случае не\nможем позволить себе пропустить его мимо ушей.</p>\n<p>У нас нет нужды ждать, пока другие вдруг выскажут свою точку зрения на нас.\nКогда мы проводим время со спонсором или другими членами АН, которым мы\nдоверяем, мы сами можем сделать первый шаг и <em>попросить</em> их рассказать, как\nони видят определенные сферы нашей жизни, в которых мы слепы. Нам необходимо\nболее широкое видение нашей жизни, чем просто наше собственное; мы можем\nполучить такое видение, используя взгляд со стороны.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я стремлюсь увидеть себя таким, какой я есть в\nдействительности. Я буду слушать то, что другие говорят обо мне, и видеть себя\nтаким, какой я есть в глазах других людей.</p>";

				const frontmatter = {"title":"29 декабря.  Взгляд со стороны","description":"Ежедневные размышления АН - 29 декабря.  Взгляд со стороны","id":"364","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/dekabr/daily_29-12.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Когда кто-нибудь указывает на наши недостатки, первой реакцией может быть\nзащита… Если мы действительно хотим быть свободными, то будем без\nпредубеждения относиться к замечаниям своих друзей-наркоманов»._\n\nОсновной текст, с. 44\n\nВ какой-то момент нашего выздоровления мы приходим к осознанию того, что\nдругие могут видеть нас совершенно иначе, чем мы сами себя представляем. Мы,\nвозможно, совсем не такие плохие и не такие хорошие, не такие красивые и не\nтакие ужасные, какими кажемся себе — но мы слишком закрыты в себе, чтобы знать\nс уверенностью, какие мы. И вот тут-то нам могут помочь наши программные\nдрузья, которые делятся с нами тем, что они видят в нас. Они рассказывают нам\nо тех хороших сторонах нас самих, которых мы, возможно, не знаем — и они\nрассказывают нам также о тех плохих чертах, которые мы, может быть, не в\nсостоянии заметить.\n\nУ нас может возникнуть защитная реакция на такую «помощь» — а в некоторых\nслучаях это единственно возможная реакция. Однако, даже какие-то злобные\nзамечания о наших недостатках могут пролить свет на те аспекты нашего\nвыздоровления, которые мы сами не можем видеть. От кого бы ни поступило такое\nполезное замечание, с какой бы целью оно ни было сделано, мы в любом случае не\nможем позволить себе пропустить его мимо ушей.\n\nУ нас нет нужды ждать, пока другие вдруг выскажут свою точку зрения на нас.\nКогда мы проводим время со спонсором или другими членами АН, которым мы\nдоверяем, мы сами можем сделать первый шаг и _попросить_ их рассказать, как\nони видят определенные сферы нашей жизни, в которых мы слепы. Нам необходимо\nболее широкое видение нашей жизни, чем просто наше собственное; мы можем\nполучить такое видение, используя взгляд со стороны.\n\n**ТОЛЬКО СЕГОДНЯ:** Я стремлюсь увидеть себя таким, какой я есть в\nдействительности. Я буду слушать то, что другие говорят обо мне, и видеть себя\nтаким, какой я есть в глазах других людей.\n";
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
