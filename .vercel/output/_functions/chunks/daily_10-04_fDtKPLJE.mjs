import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы должны пользоваться тем, что узнаем на собрании или мы утратим это, вне\nзависимости от того насколько долго мы были чистыми».</em></p>\n<p>Основной текст, с.92</p>\n<p>После того, как мы прожили определенное время чистыми, некоторые из нас имеют\nтенденцию забывать, что для нас является главным. Раз в неделю, а то и реже мы\nговорим: « Надо сходить на собрание сегодня вечером. Вечер приходит…» Нас\nзахватывают другие дела безусловно важные, но не более важные, чем постоянная\nработа в Анонимных Наркоманах.</p>\n<p>Это происходит постепенно. Мы получаем работу. Мы воссоединяемся со своими\nсемьями. Мы поднимаем детей, собака болеет или мы идем учиться вечером. Дом\nнадо прибрать. Траву надо подстричь. Приходиться много работать. В театре\nсегодня хорошее представление. И совершенно неожиданно мы вспоминаем, что не\nпозвонили наставнику, не были на собрании, не поговорили с новичком, а то и\nмолиться забываем уже давно.</p>\n<p>Что нам делать в таком случае? Ну, либо мы возобновляем свои обязательства по\nвыздоровлению или продолжим быть слишком занятыми, чтобы выздоравливать, пока\nчто-то не произойдет и наша жизнь не станет неуправляемой. Вот такой выбор!\nНашей лучшей ставкой является вложить больше своей энергии в основание\nфундамента выздоровления, на котором зиждется наша жизнь. Этот фундамент\nделает все остальное возможным, и без сомнения он будет обваливаться, если мы\nбудем черезчур занятыми всем остальным.</p>\n<p><strong>НАПОМИНАНИЕ НА СЕГОДНЯ:</strong> Я не могу себе позволить быть слишком занятым, не\nзаботясь о своем выздоровлении. Я сделаю что-нибудь сегодня, что поддержит мое\nвыздоровление.</p>";

				const frontmatter = {"title":"10 апреля. Чересчур занятый","description":"Ежедневные размышления АН - 10 апреля. Чересчур занятый","id":"101","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/april/daily_10-04.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы должны пользоваться тем, что узнаем на собрании или мы утратим это, вне\nзависимости от того насколько долго мы были чистыми»._\n\nОсновной текст, с.92\n\nПосле того, как мы прожили определенное время чистыми, некоторые из нас имеют\nтенденцию забывать, что для нас является главным. Раз в неделю, а то и реже мы\nговорим: « Надо сходить на собрание сегодня вечером. Вечер приходит…» Нас\nзахватывают другие дела безусловно важные, но не более важные, чем постоянная\nработа в Анонимных Наркоманах.\n\nЭто происходит постепенно. Мы получаем работу. Мы воссоединяемся со своими\nсемьями. Мы поднимаем детей, собака болеет или мы идем учиться вечером. Дом\nнадо прибрать. Траву надо подстричь. Приходиться много работать. В театре\nсегодня хорошее представление. И совершенно неожиданно мы вспоминаем, что не\nпозвонили наставнику, не были на собрании, не поговорили с новичком, а то и\nмолиться забываем уже давно.\n\nЧто нам делать в таком случае? Ну, либо мы возобновляем свои обязательства по\nвыздоровлению или продолжим быть слишком занятыми, чтобы выздоравливать, пока\nчто-то не произойдет и наша жизнь не станет неуправляемой. Вот такой выбор!\nНашей лучшей ставкой является вложить больше своей энергии в основание\nфундамента выздоровления, на котором зиждется наша жизнь. Этот фундамент\nделает все остальное возможным, и без сомнения он будет обваливаться, если мы\nбудем черезчур занятыми всем остальным.\n\n**НАПОМИНАНИЕ НА СЕГОДНЯ:** Я не могу себе позволить быть слишком занятым, не\nзаботясь о своем выздоровлении. Я сделаю что-нибудь сегодня, что поддержит мое\nвыздоровление.\n";
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
