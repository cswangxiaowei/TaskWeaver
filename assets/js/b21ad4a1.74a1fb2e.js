"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2802],{5590:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>_,metadata:()=>a,toc:()=>l});var t=r(5893),i=r(1151);const _={id:"develop_plugin",description:"How to develop a new plugin",slug:"/plugin/how_to_develop_a_new_plugin"},o="How to develop a new plugin",a={id:"customization/plugin/develop_plugin",title:"How to develop a new plugin",description:"How to develop a new plugin",source:"@site/docs/customization/plugin/how_to_develop_a_new_plugin.md",sourceDirName:"customization/plugin",slug:"/plugin/how_to_develop_a_new_plugin",permalink:"/TaskWeaver/docs/plugin/how_to_develop_a_new_plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/docs/website/docs/customization/plugin/how_to_develop_a_new_plugin.md",tags:[],version:"current",frontMatter:{id:"develop_plugin",description:"How to develop a new plugin",slug:"/plugin/how_to_develop_a_new_plugin"},sidebar:"documentSidebar",previous:{title:"Embedding",permalink:"/TaskWeaver/docs/customization/plugin/embedding"},next:{title:"Customizing Examples",permalink:"/TaskWeaver/docs/customization/example/"}},s={},l=[{value:"Implement the python code",id:"implement-the-python-code",level:2},{value:"Configure the schema",id:"configure-the-schema",level:2},{value:"Call the plugin",id:"call-the-plugin",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-develop-a-new-plugin",children:"How to develop a new plugin"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we will introduce how to develop a strawman plugin in TaskWeaver. This plugin can render a input text in ascii art."}),"\n",(0,t.jsx)(n.h2,{id:"implement-the-python-code",children:"Implement the python code"}),"\n",(0,t.jsxs)(n.p,{children:["Create a python file named ",(0,t.jsx)(n.code,{children:"ascii_render.py"})," in the ",(0,t.jsx)(n.code,{children:"plugins"})," folder. The file name should be the same as the plugin name. The plugin name is defined in the plugin schema. In this example, the plugin name is ",(0,t.jsx)(n.code,{children:"ascii_render"}),".\r\nThe following code is the template of the plugin implementation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from taskweaver.plugin import Plugin, register_plugin\r\n\r\n@register_plugin\r\nclass PluginTemplate(Plugin):\r\n    def __call__(self, *args, **kwargs):\r\n        """Implementation Starts"""\r\n        result, description = YourImplementation()\r\n        """Implementation Ends"""\r\n\r\n        # if your want to add artifact from the execution result, uncomment the following code\r\n        # self.ctx.add_artifact(\r\n        #     name="artifact",\r\n        #     file_name="artifact.csv",\r\n        #     type="df",\r\n        #     val=result,\r\n        # )\r\n        return result, description\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The typical way of implementing the plugin is to change the code between ",(0,t.jsx)(n.code,{children:"Implementation Starts"})," and ",(0,t.jsx)(n.code,{children:"Implementation Ends"}),". Note that the return are two variables ",(0,t.jsx)(n.em,{children:"result"})," and ",(0,t.jsx)(n.em,{children:"description"}),". The ",(0,t.jsx)(n.em,{children:"result"})," stores whatever output required for follow-up processing (e.g., a DataFrame). The ",(0,t.jsx)(n.em,{children:"description"})," is a string to describe the result."]}),"\n",(0,t.jsx)(n.p,{children:"Let's make some changes to the code and the result is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from taskweaver.plugin import Plugin, register_plugin\r\n\r\n@register_plugin\r\nclass AsciiRenderPlugin(Plugin):\r\n    def __call__(self, text: str):\r\n        import pyfiglet\r\n        ascii_art_str = pyfiglet.figlet_format(text, font='isometric1')\r\n        return ascii_art_str\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that this function depends on the package ",(0,t.jsx)(n.code,{children:"pyfiglet"}),", so we need to install it with ",(0,t.jsx)(n.code,{children:"pip install pyfiglet"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-schema",children:"Configure the schema"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to configure the schema so that the LLM can understand the function\r\nof the plugin. In the schema, there are several fields that should be filled,\r\nincluding ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"enabled"}),", ",(0,t.jsx)(n.code,{children:"required"}),", ",(0,t.jsx)(n.code,{children:"description"}),", ",(0,t.jsx)(n.code,{children:"parameters"})," and ",(0,t.jsx)(n.code,{children:"returns"}),".\r\nPlease check ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/TaskWeaver/docs/plugin/plugin_intro",children:"Plugin Introduction"}),"\r\nfor more details.\r\nCreate a yaml file named ",(0,t.jsx)(n.code,{children:"ascii_render.yaml"})," and copy the following content into it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: ascii_render\r\nenabled: true\r\nrequired: true\r\ndescription: >-\r\n  This plugin renders the input text into ASCII art form. \r\n  The input should be a string and the output is also a string in ASCII art.\r\n  For example, result = ascii_render(text='Hello World').\r\n\r\nparameters:\r\n  - name: text\r\n    type: str\r\n    required: true\r\n    description: >-\r\n      This is the input text to be rendered into ASCII art form.\r\n\r\nreturns:\r\n  - name: result\r\n    type: str\r\n    description: >-\r\n      The rendered text in ASCII art.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"call-the-plugin",children:"Call the plugin"}),"\n",(0,t.jsx)(n.p,{children:"After the plugin is implemented and configured, we can call the plugin in the conversation.\r\nThe full conversation is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"=========================================================\r\n _____         _     _       __\r\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\r\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\r\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\r\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\r\n=========================================================\r\nTaskWeaver: I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\r\nHuman: render ABC in ascii art\r\n>>> [INIT_PLAN]\r\n1. Render the text 'ABC' into ASCII art\r\n>>> [PLAN]\r\n1. Instruct CodeInterpreter to render the text 'ABC' into ASCII art\r\n>>> [CURRENT_PLAN_STEP]\r\n1. Instruct CodeInterpreter to render the text 'ABC' into ASCII art\r\n>>> [SEND_TO]\r\nCodeInterpreter\r\n>>> [MESSAGE]\r\nPlease render the text 'ABC' into ASCII art\r\n>>> [PLANNER->CODEINTERPRETER]\r\nPlease render the text 'ABC' into ASCII art\r\n>>> [PYTHON]\r\n# Call the plugin function to render the text 'ABC' into ASCII art\r\nascii_art_result = ascii_render(\"ABC\")\r\nascii_art_result\r\n>>> [VERIFICATION]\r\nNONE\r\n>>> [STATUS]\r\nSUCCESS\r\n>>> [RESULT]\r\nThe execution of the generated python code above has succeeded\r\n\r\nThe result of above Python code after execution is:\r\n      ___           ___           ___     \r\n     /\\  \\         /\\  \\         /\\  \\    \r\n    /::\\  \\       /::\\  \\       /::\\  \\   \r\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  \r\n  /::\\~\\:\\  \\   /::\\~\\:\\__\\   /:/  \\:\\  \\ \r\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:|__| /:/__/ \\:\\__\\\r\n \\/__\\:\\/:/  / \\:\\~\\:\\/:/  / \\:\\  \\  \\/__/\r\n      \\::/  /   \\:\\ \\::/  /   \\:\\  \\      \r\n      /:/  /     \\:\\/:/  /     \\:\\  \\     \r\n     /:/  /       \\::/__/       \\:\\__\\    \r\n     \\/__/         ~~            \\/__/    \r\n\r\n>>> [CODEINTERPRETER->PLANNER]\r\nThe following python code has been executed:\r\n\r\n# Call the plugin function to render the text 'ABC' into ASCII art\r\nascii_art_result = ascii_render(\"ABC\")\r\nascii_art_result\r\n\r\n\r\n\r\nThe execution of the generated python code above has succeeded\r\n\r\nThe result of above Python code after execution is:\r\n      ___           ___           ___     \r\n     /\\  \\         /\\  \\         /\\  \\    \r\n    /::\\  \\       /::\\  \\       /::\\  \\   \r\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  \r\n  /::\\~\\:\\  \\   /::\\~\\:\\__\\   /:/  \\:\\  \\ \r\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:|__| /:/__/ \\:\\__\\\r\n \\/__\\:\\/:/  / \\:\\~\\:\\/:/  / \\:\\  \\  \\/__/\r\n      \\::/  /   \\:\\ \\::/  /   \\:\\  \\      \r\n      /:/  /     \\:\\/:/  /     \\:\\  \\     \r\n     /:/  /       \\::/__/       \\:\\__\\    \r\n     \\/__/         ~~            \\/__/    \r\n\r\n>>> [INIT_PLAN]  \r\n1. Render the text 'ABC' into ASCII art\r\n>>> [PLAN]\r\n1. Instruct CodeInterpreter to render the text 'ABC' into ASCII art\r\n>>> [CURRENT_PLAN_STEP]\r\nReport the ASCII art to the user\r\n>>> [SEND_TO]\r\nUser\r\n>>> [MESSAGE]\r\nHere is the text 'ABC' rendered in ASCII art:\r\n      ___           ___           ___     \r\n     /\\  \\         /\\  \\         /\\  \\    \r\n    /::\\  \\       /::\\  \\       /::\\  \\   \r\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  \r\n  /::\\~\\:\\  \\   /::\\~\\:\\__\\   /:/  \\:\\  \\ \r\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:|__| /:/__/ \\:\\__\\\r\n \\/__\\:\\/:/  / \\:\\~\\:\\/:/  / \\:\\  \\  \\/__/\r\n      \\::/  /   \\:\\ \\::/  /   \\:\\  \\      \r\n      /:/  /     \\:\\/:/  /     \\:\\  \\     \r\n     /:/  /       \\::/__/       \\:\\__\\    \r\n     \\/__/         ~~            \\/__/    \r\n>>> [PLANNER->USER]\r\nHere is the text 'ABC' rendered in ASCII art:\r\n      ___           ___           ___     \r\n     /\\  \\         /\\  \\         /\\  \\    \r\n    /::\\  \\       /::\\  \\       /::\\  \\   \r\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  \r\n  /::\\~\\:\\  \\   /::\\~\\:\\__\\   /:/  \\:\\  \\ \r\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:|__| /:/__/ \\:\\__\\\r\n \\/__\\:\\/:/  / \\:\\~\\:\\/:/  / \\:\\  \\  \\/__/\r\n      \\::/  /   \\:\\ \\::/  /   \\:\\  \\      \r\n      /:/  /     \\:\\/:/  /     \\:\\  \\     \r\n     /:/  /       \\::/__/       \\:\\__\\    \r\n     \\/__/         ~~            \\/__/    \r\nTaskWeaver: Here is the text 'ABC' rendered in ASCII art:\r\n      ___           ___           ___     \r\n     /\\  \\         /\\  \\         /\\  \\    \r\n    /::\\  \\       /::\\  \\       /::\\  \\   \r\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  \r\n  /::\\~\\:\\  \\   /::\\~\\:\\__\\   /:/  \\:\\  \\ \r\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:|__| /:/__/ \\:\\__\\\r\n \\/__\\:\\/:/  / \\:\\~\\:\\/:/  / \\:\\  \\  \\/__/\r\n      \\::/  /   \\:\\ \\::/  /   \\:\\  \\      \r\n      /:/  /     \\:\\/:/  /     \\:\\  \\     \r\n     /:/  /       \\::/__/       \\:\\__\\    \r\n     \\/__/         ~~            \\/__/        \n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const i={},_=t.createContext(i);function o(e){const n=t.useContext(_);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(_.Provider,{value:n},e.children)}}}]);