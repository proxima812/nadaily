import { a5 as __astro_tag_component__, j as Fragment, a4 as createVNode } from './astro_B8tmmdD1.mjs';
import { $ as $$Image } from './pages/generic_BcThZHAj.mjs';
import 'clsx';

const frontmatter = {
  "title": "\u043F\u0440\u0438\u043C\u0435\u0440",
  "description": "\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
  "noIndex": true
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "123"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "123"
          }), createVNode(_components.th, {
            children: "123"
          }), createVNode(_components.th, {
            children: "123"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "3"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: 'title: fields.slug({ name: { label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" } }),'
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/test";
const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/pages/test.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/pages/test.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
