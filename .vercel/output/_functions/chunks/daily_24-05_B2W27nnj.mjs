import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы учимся преодолевать стремление убежать и спрятаться от себя и своих\nчувств.”</em></p>\n<p>Основной текст, с. 97</p>\n<p>Мы боялись быть уязвленными, и, чтобы не рисковать, многие из нас выработали\nпривычку держать других людей на безопасном расстоянии от себя. Примеры такой\nэмоциональной изоляции могут дать нам ощущение, что мы безнадежно закрыты\nсвоими масками. Мы привыкли рисковать своей жизнью; теперь мы можем пойти на\nриск со своими чувствами. Делясь с другими наркоманами, мы узнаем, что мы не\nуникальны; мы не станем слишком уязвимыми из-за того, что просто позволим\nдругим получше узнать нас, тем более если мы в хорошей компании. Работая по\nДвенадцати Шагам программы NA, мы растем и меняемся. Нам больше не хочется и\nне нужно прятаться от грозящей нам опасности. Нам предлагают возможность\nсбросить со своих чувств маскировку, которая помогала выжить во время активной\nнаркомании.</p>\n<p>Открываясь перед другими, мы рискуем стать уязвимыми, но этот риск стоит того,\nчтобы на него пойти. С помощью спонсора и других выздоравливающих наркоманов\nмы учимся выражать свои чувства честно и открыто. Мы становимся сильными и\nмужественными, получая в ответ на свои чувства бескорыстную любовь своих\nтоварищей. Применяя духовные принципы, мы находим силу и свободу как в самих\nсебе, так и в окружающих нас людях. Это наше право — быть самими собой и\nрадоваться компании наших зависимых товарищей.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я открыто и честно поделюсь с другим выздоравливающим\nнаркоманом. Я рискну стать уязвимым и порадуюсь себе и своей дружбе с другими\nучастниками NA. Я буду расти.</p>";

				const frontmatter = {"title":"24 мая. Рискуя быть уязвимыми","description":"Ежедневные размышления АН - 24 мая. Рискуя быть уязвимыми","id":"145","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_24-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы учимся преодолевать стремление убежать и спрятаться от себя и своих\nчувств.”_\n\nОсновной текст, с. 97\n\nМы боялись быть уязвленными, и, чтобы не рисковать, многие из нас выработали\nпривычку держать других людей на безопасном расстоянии от себя. Примеры такой\nэмоциональной изоляции могут дать нам ощущение, что мы безнадежно закрыты\nсвоими масками. Мы привыкли рисковать своей жизнью; теперь мы можем пойти на\nриск со своими чувствами. Делясь с другими наркоманами, мы узнаем, что мы не\nуникальны; мы не станем слишком уязвимыми из-за того, что просто позволим\nдругим получше узнать нас, тем более если мы в хорошей компании. Работая по\nДвенадцати Шагам программы NA, мы растем и меняемся. Нам больше не хочется и\nне нужно прятаться от грозящей нам опасности. Нам предлагают возможность\nсбросить со своих чувств маскировку, которая помогала выжить во время активной\nнаркомании.\n\nОткрываясь перед другими, мы рискуем стать уязвимыми, но этот риск стоит того,\nчтобы на него пойти. С помощью спонсора и других выздоравливающих наркоманов\nмы учимся выражать свои чувства честно и открыто. Мы становимся сильными и\nмужественными, получая в ответ на свои чувства бескорыстную любовь своих\nтоварищей. Применяя духовные принципы, мы находим силу и свободу как в самих\nсебе, так и в окружающих нас людях. Это наше право — быть самими собой и\nрадоваться компании наших зависимых товарищей.\n\n**ТОЛЬКО СЕГОДНЯ:** Я открыто и честно поделюсь с другим выздоравливающим\nнаркоманом. Я рискну стать уязвимым и порадуюсь себе и своей дружбе с другими\nучастниками NA. Я буду расти.\n";
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