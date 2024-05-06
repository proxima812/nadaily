import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы исследуем наши действия, реакции и побуждения. Часто мы обнаруживаем, что\nмы поступали лучше, чем нам казалось”.</em></p>\n<p>Основной текст, с. 52</p>\n<p>В том, как мы относимся к другим людям, мы часто проявляем свою сущность.\nКогда мы находимся в мире, мы, скорее всего, будем относиться к людям с\nуважением и сочувствием. Однако когда мы чувствуем себя не в себе, мы, скорее\nвсего, будем нетерпимо относиться к другим. Когда мы регулярно проводим\nсамоанализ, мы, возможно, замечаем закономерность: Мы плохо обращаемся с\nлюдьми тогда, когда мы плохо относимся к себе.</p>\n<p>Есть и другая сторона медали, которая может быть не отмечена в инвентаризации:\nкогда мы хорошо относимся к людям, мы хорошо относимся и к себе. Если мы\nдобавим этот позитивный факт к негативным фактам, которые мы узнали о себе из\nинвентаризации, то мы начинаем по-другому себя вести.</p>\n<p>Когда мы плохо себя чувствуем, мы можем сделать паузу, для того, чтобы\nпомолиться о руководстве и силе. Затем, мы принимаем решение относиться к\nокружающим нас людям по-доброму, мягко, с такой же заботой, какую хотели бы\nвидеть по отношению к себе. Решение быть добрым может питать и поддерживать\nсчастье и умиротворенность, которых мы желаем. И радость, которую мы поощряем\nв себе, может поднять настроение людям вокруг нас, и, в свою очередь,\nспособствовать хорошему состоянию нашего духа.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду помнить, что если я изменю свои поступки, за ними\nизменяться и мысли.</p>";

				const frontmatter = {"title":"30 августа.  Поступая хорошо, чувствуешь себя хорошо","description":"Ежедневные размышления АН - 30 августа.  Поступая хорошо, чувствуешь себя хорошо","id":"243","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_30-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы исследуем наши действия, реакции и побуждения. Часто мы обнаруживаем, что\nмы поступали лучше, чем нам казалось”._\n\nОсновной текст, с. 52\n\nВ том, как мы относимся к другим людям, мы часто проявляем свою сущность.\nКогда мы находимся в мире, мы, скорее всего, будем относиться к людям с\nуважением и сочувствием. Однако когда мы чувствуем себя не в себе, мы, скорее\nвсего, будем нетерпимо относиться к другим. Когда мы регулярно проводим\nсамоанализ, мы, возможно, замечаем закономерность: Мы плохо обращаемся с\nлюдьми тогда, когда мы плохо относимся к себе.\n\nЕсть и другая сторона медали, которая может быть не отмечена в инвентаризации:\nкогда мы хорошо относимся к людям, мы хорошо относимся и к себе. Если мы\nдобавим этот позитивный факт к негативным фактам, которые мы узнали о себе из\nинвентаризации, то мы начинаем по-другому себя вести.\n\nКогда мы плохо себя чувствуем, мы можем сделать паузу, для того, чтобы\nпомолиться о руководстве и силе. Затем, мы принимаем решение относиться к\nокружающим нас людям по-доброму, мягко, с такой же заботой, какую хотели бы\nвидеть по отношению к себе. Решение быть добрым может питать и поддерживать\nсчастье и умиротворенность, которых мы желаем. И радость, которую мы поощряем\nв себе, может поднять настроение людям вокруг нас, и, в свою очередь,\nспособствовать хорошему состоянию нашего духа.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду помнить, что если я изменю свои поступки, за ними\nизменяться и мысли.\n";
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