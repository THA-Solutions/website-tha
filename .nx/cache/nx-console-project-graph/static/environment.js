window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    workspaces: [
      {
        id: 'local',
        label: 'local',
        projectGraphUrl: 'project-graph.json',
        taskGraphUrl: 'task-graph.json'
      }
    ],
    defaultWorkspaceId: 'local',
  };
  window.projectGraphResponse = {"hash":"2d0c66c27c86bfab53aeb74cc6a4b407f067b1767562a4c09d571b022cc9a35d","projects":[{"name":"back-api-e2e","type":"e2e","data":{"name":"back-api-e2e","root":"apps/back/api-e2e","$schema":"../../../node_modules/nx/schemas/project-schema.json","implicitDependencies":["back-api"],"projectType":"application","targets":{"e2e":{"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{e2eProjectRoot}"],"options":{"jestConfig":"apps/back/api-e2e/jest.config.ts","passWithNoTests":true},"configurations":{}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore","{workspaceRoot}/eslint.config.js"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/back/api-e2e/**/*.{js,ts}"]},"configurations":{}}},"tags":[]}},{"name":"back-api","type":"app","data":{"name":"back-api","root":"apps/back/api","$schema":"../../../node_modules/nx/schemas/project-schema.json","sourceRoot":"apps/back/api/src","projectType":"application","targets":{"build":{"dependsOn":["^build"],"inputs":["production","^production"],"executor":"@nx/webpack:webpack","outputs":["{options.outputPath}"],"defaultConfiguration":"production","options":{"target":"node","compiler":"tsc","outputPath":"dist/apps/back/api","main":"apps/back/api/src/main.ts","tsConfig":"apps/back/api/tsconfig.app.json","assets":["apps/back/api/src/assets"],"isolatedConfig":true,"webpackConfig":"apps/back/api/webpack.config.js"},"configurations":{"development":{},"production":{}}},"serve":{"executor":"@nx/js:node","defaultConfiguration":"development","options":{"buildTarget":"back-api:build"},"configurations":{"development":{"buildTarget":"back-api:build:development"},"production":{"buildTarget":"back-api:build:production"}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore","{workspaceRoot}/eslint.config.js"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/back/api/**/*.ts"]},"configurations":{}},"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"apps/back/api/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}}},"tags":[],"implicitDependencies":[]}},{"name":"index","type":"lib","data":{"name":"index","root":"libs/domain","$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"libs/domain/src","projectType":"library","targets":{"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore","{workspaceRoot}/eslint.config.js"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/domain/**/*.ts"]},"configurations":{}},"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"libs/domain/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}}},"tags":[],"implicitDependencies":[]}},{"name":"front","type":"app","data":{"name":"front","root":"apps/front","$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"apps/front","projectType":"application","targets":{"build":{"dependsOn":["^build"],"inputs":["production","^production"],"executor":"@nx/next:build","outputs":["{options.outputPath}"],"defaultConfiguration":"production","options":{"outputPath":"dist/apps/front"},"configurations":{"development":{"outputPath":"apps/front"},"production":{}}},"serve":{"executor":"@nx/next:server","defaultConfiguration":"development","options":{"buildTarget":"front:build","dev":true,"proxyConfig":"apps/front/proxy.conf.json"},"configurations":{"development":{"buildTarget":"front:build:development","dev":true},"production":{"buildTarget":"front:build:production","dev":false}}},"export":{"executor":"@nx/next:export","options":{"buildTarget":"front:build:production"},"configurations":{}},"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"apps/front/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore","{workspaceRoot}/eslint.config.js"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/front/**/*.{ts,tsx,js,jsx}"]},"configurations":{}}},"tags":[],"implicitDependencies":[]}}],"dependencies":{"back-api-e2e":[{"source":"back-api-e2e","target":"back-api","type":"implicit"}],"back-api":[],"index":[],"front":[{"source":"front","target":"index","type":"static"}]},"fileMap":{"front":[{"file":"apps/front/.eslintrc.json","hash":"11187634771801364746"},{"file":"apps/front/app/admin/(articles)/adicionar-artigo/layout.tsx","hash":"1547943450083684342","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(articles)/adicionar-artigo/page.tsx","hash":"16063469210235036721","deps":["npm:next","npm:react-hook-form","npm:react-toastify","index","npm:react-quill"]},{"file":"apps/front/app/admin/(articles)/artigos/layout.tsx","hash":"11295867454269402855","deps":["npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(articles)/artigos/loading.tsx","hash":"3239241881109415074","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(articles)/artigos/page.tsx","hash":"14086740631809800977","deps":["npm:react","npm:react-toastify","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/admin/(articles)/editar-artigo/[id]/layout.tsx","hash":"4853148922870053238","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(articles)/editar-artigo/[id]/loading.tsx","hash":"1044216827097644215","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(articles)/editar-artigo/[id]/page.tsx","hash":"221724651541939190","deps":["npm:react","npm:react-hook-form","npm:next","npm:react-toastify","index"]},{"file":"apps/front/app/admin/(company)/adicionar-empresa/layout.tsx","hash":"15911903529406014791","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(company)/adicionar-empresa/page.tsx","hash":"1706970244553491190","deps":["npm:next","npm:react-hook-form","npm:react-toastify","index"]},{"file":"apps/front/app/admin/(company)/editar-empresa/[id]/layout.tsx","hash":"16786069545318142338","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(company)/editar-empresa/[id]/loading.tsx","hash":"1044216827097644215","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(company)/editar-empresa/[id]/page.tsx","hash":"3200664969010636543","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","index"]},{"file":"apps/front/app/admin/(company)/empresas/layout.tsx","hash":"16368461927037536683","deps":["npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(company)/empresas/loading.tsx","hash":"3503489897194209069","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(company)/empresas/page.tsx","hash":"14106520417300943956","deps":["npm:react","npm:react-toastify","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/admin/(customers)/adicionar-cliente/layout.tsx","hash":"15432557573168831190","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(customers)/adicionar-cliente/page.tsx","hash":"11069762690031925345","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","index"]},{"file":"apps/front/app/admin/(customers)/clientes/layout.tsx","hash":"11661419079111072363","deps":["npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(customers)/clientes/loading.tsx","hash":"11620837052211968923","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(customers)/clientes/page.tsx","hash":"2127166073524624017","deps":["npm:react","npm:react-toastify","index","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(customers)/editar-cliente/[id]/layout.tsx","hash":"6508772544701623117","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(customers)/editar-cliente/[id]/loading.tsx","hash":"1044216827097644215","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(customers)/editar-cliente/[id]/page.tsx","hash":"16719046900141728368","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","index"]},{"file":"apps/front/app/admin/(team)/adicionar-colaborador/layout.tsx","hash":"9223909952670271496","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(team)/adicionar-colaborador/page.tsx","hash":"6792154779765613803","deps":["npm:next","npm:react-hook-form","npm:react-toastify","index"]},{"file":"apps/front/app/admin/(team)/editar-colaborador/[id]/layout.tsx","hash":"88924860789187720","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(team)/editar-colaborador/[id]/loading.tsx","hash":"1044216827097644215","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(team)/editar-colaborador/[id]/page.tsx","hash":"8672492215640679596","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","index"]},{"file":"apps/front/app/admin/(team)/equipe/layout.tsx","hash":"586785620751219167","deps":["npm:@mui/icons-material"]},{"file":"apps/front/app/admin/(team)/equipe/loading.tsx","hash":"9226024846128416419","deps":["npm:@mui/material"]},{"file":"apps/front/app/admin/(team)/equipe/page.tsx","hash":"8758066003562581807","deps":["npm:react","npm:react-toastify","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/admin/artigos/editar/[id]/page.tsx","hash":"18091260468333237411","deps":["index","npm:next","npm:react","npm:react-hook-form","npm:react-toastify"]},{"file":"apps/front/app/admin/layout.tsx","hash":"6800190561516543387"},{"file":"apps/front/app/admin/page.tsx","hash":"6353227301105233913","deps":["npm:next","npm:next-auth"]},{"file":"apps/front/app/api/auth/[...nextauth]/route.ts","hash":"745827755250862607","deps":["npm:next-auth"]},{"file":"apps/front/app/blog/(articles)/layout.tsx","hash":"2297267907539234934"},{"file":"apps/front/app/blog/(articles)/loading.tsx","hash":"11139569199094575117","deps":["npm:@mui/material"]},{"file":"apps/front/app/blog/(articles)/page.tsx","hash":"794414367237397821","deps":["npm:react","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/blog/[id]/layout.tsx","hash":"13272584112768670"},{"file":"apps/front/app/blog/[id]/loading.tsx","hash":"17053539084572318354","deps":["npm:@mui/icons-material","npm:@mui/material"]},{"file":"apps/front/app/blog/[id]/page.tsx","hash":"8088288482076018410","deps":["npm:react","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/cadastrar/layout.tsx","hash":"3280092033168916419"},{"file":"apps/front/app/cadastrar/page.tsx","hash":"2028649073374128761","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/compara/[...id]/layout.tsx","hash":"16185848589453048338"},{"file":"apps/front/app/compara/[...id]/page.tsx","hash":"4821432980706193856","deps":["index"]},{"file":"apps/front/app/contato/layout.tsx","hash":"14252568361901652710"},{"file":"apps/front/app/contato/page.tsx","hash":"17677730216579686280","deps":["npm:react-hook-form","npm:react-toastify","npm:@mui/icons-material","index"]},{"file":"apps/front/app/dashboard/layout.tsx","hash":"3707038707063214176"},{"file":"apps/front/app/dashboard/page.tsx","hash":"6353227301105233913","deps":["npm:next","npm:next-auth"]},{"file":"apps/front/app/entrar/layout.tsx","hash":"14561802937006141001"},{"file":"apps/front/app/entrar/page.tsx","hash":"6424121397780199974","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","npm:next-auth","npm:@mui/icons-material"]},{"file":"apps/front/app/fichatecnica/[id]/layout.tsx","hash":"11926809533132584807"},{"file":"apps/front/app/fichatecnica/[id]/page.tsx","hash":"8433103297211369219","deps":["index"]},{"file":"apps/front/app/global-error.tsx","hash":"4650537769522017431"},{"file":"apps/front/app/global.css","hash":"18041542422565954484"},{"file":"apps/front/app/icon.png","hash":"11332139226760291396"},{"file":"apps/front/app/laboratorio/layout.tsx","hash":"11121163877648420802"},{"file":"apps/front/app/laboratorio/page.tsx","hash":"1925285204066402571","deps":["npm:@mui/icons-material"]},{"file":"apps/front/app/laboratorio/section-data.tsx","hash":"16309819240513960673","deps":["npm:@iconify/react","npm:@mui/icons-material"]},{"file":"apps/front/app/layout.tsx","hash":"3893238609531561894","deps":["npm:next-nprogress-bar","npm:next-auth","npm:next","npm:react-toastify"]},{"file":"apps/front/app/marketing/layout.tsx","hash":"1745536830219980751"},{"file":"apps/front/app/marketing/page.tsx","hash":"11259731855380863812","deps":["npm:react","npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/not-found.tsx","hash":"13072155391671800503","deps":["npm:next"]},{"file":"apps/front/app/page.tsx","hash":"2485423881771347016","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/perfil/editar/[id]/editar-email/page.tsx","hash":"7210662260362265593"},{"file":"apps/front/app/perfil/editar/[id]/layout.tsx","hash":"1040499677520416670","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/perfil/editar/[id]/page.tsx","hash":"4827652721984934392","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:next","index","npm:next-auth"]},{"file":"apps/front/app/perfil/editar/[id]/token/page.tsx","hash":"17107803942745584217","deps":["npm:next-auth","npm:react-toastify","index","npm:@mui/icons-material"]},{"file":"apps/front/app/perfil/editar/senha/[resetToken]/layout.tsx","hash":"15651721744445452626","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/perfil/editar/senha/[resetToken]/page.tsx","hash":"14711942650045140852","deps":["npm:react","npm:react-hook-form","npm:react-toastify","npm:@mui/icons-material","index"]},{"file":"apps/front/app/perfil/layout.tsx","hash":"13821176728213563642"},{"file":"apps/front/app/perfil/page.tsx","hash":"1203576896256537598","deps":["npm:react","npm:next-auth","npm:next","npm:@mui/icons-material","index","npm:@mui/material"]},{"file":"apps/front/app/politica-privacidade/layout.tsx","hash":"9747213917590827013"},{"file":"apps/front/app/politica-privacidade/page.tsx","hash":"11990025178644085031"},{"file":"apps/front/app/seja-cliente/layout.tsx","hash":"12834766743520025651"},{"file":"apps/front/app/seja-cliente/page.tsx","hash":"17499505452066862057","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/sobre/layout.tsx","hash":"2294132516898733471"},{"file":"apps/front/app/sobre/page.tsx","hash":"6888273695815853553","deps":["npm:react","npm:next","npm:@mui/icons-material","index"]},{"file":"apps/front/app/suporte-tecnico/layout.tsx","hash":"307611031701497499"},{"file":"apps/front/app/suporte-tecnico/page.tsx","hash":"14051647811278004063","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/app/termos-uso/layout.tsx","hash":"6979178318093123355"},{"file":"apps/front/app/termos-uso/page.tsx","hash":"4376684280817318410"},{"file":"apps/front/components/article-form.tsx","hash":"7359784784905899688","deps":["npm:next","npm:react","npm:react-hook-form","npm:react-quill","index",["npm:react-quill","dynamic"]]},{"file":"apps/front/components/card.tsx","hash":"16071563377065261153","deps":["npm:next"]},{"file":"apps/front/components/company-form.tsx","hash":"15347054474267079111","deps":["npm:react-hook-form","index","npm:axios"]},{"file":"apps/front/components/customer-form.tsx","hash":"14585914168785735627","deps":["npm:react","npm:react-hook-form","index"]},{"file":"apps/front/components/customer-table.tsx","hash":"11571498417032587658","deps":["npm:next","index","npm:@mui/icons-material"]},{"file":"apps/front/components/delete-dialog.tsx","hash":"13117074423301568634","deps":["npm:react","npm:@mui/material","npm:@mui/icons-material"]},{"file":"apps/front/components/footer.tsx","hash":"15144692278993374289","deps":["npm:next","npm:@mui/icons-material"]},{"file":"apps/front/components/header-admin.tsx","hash":"3466857411202023518","deps":["npm:next"]},{"file":"apps/front/components/header.tsx","hash":"4045539671599168368","deps":["npm:next","npm:next-auth","npm:react","npm:@headlessui/react","npm:@mui/icons-material","npm:@mui/material"]},{"file":"apps/front/components/image-not-found.tsx","hash":"14755405606749954640","deps":["npm:@mui/icons-material"]},{"file":"apps/front/components/input-field.tsx","hash":"7842493941693441111","deps":["npm:react-hook-form","npm:@mui/icons-material"]},{"file":"apps/front/components/input-search.tsx","hash":"11638588470881790493","deps":["npm:@mui/icons-material"]},{"file":"apps/front/components/laboratory-section.tsx","hash":"2736575542826062830","deps":["npm:next"]},{"file":"apps/front/components/navbar-admin.tsx","hash":"2872911279370911976","deps":["npm:react","npm:next","npm:@headlessui/react","npm:@mui/icons-material"]},{"file":"apps/front/components/page-title.tsx","hash":"2812538586665537095"},{"file":"apps/front/components/password-input-field.tsx","hash":"12116466223872372570","deps":["npm:@mui/icons-material"]},{"file":"apps/front/components/team-form.tsx","hash":"10821731319547485224","deps":["npm:react-hook-form","index"]},{"file":"apps/front/components/user-form.tsx","hash":"12147812877556893720","deps":["npm:react-hook-form","npm:next","index","npm:@mui/icons-material"]},{"file":"apps/front/constants/index.ts","hash":"18409068165201461345","deps":["npm:@mui/icons-material"]},{"file":"apps/front/index.d.ts","hash":"17021007320214501298"},{"file":"apps/front/jest.config.ts","hash":"12757964871041264093"},{"file":"apps/front/libs/authOptions.ts","hash":"9202208202259646095","deps":["npm:next-auth","index"]},{"file":"apps/front/middleware.ts","hash":"12423533651437837990","deps":["npm:next-auth","npm:next"]},{"file":"apps/front/next-env.d.ts","hash":"650381615855576712"},{"file":"apps/front/next.config.js","hash":"10574307969212377141","deps":["npm:@nx/next"]},{"file":"apps/front/postcss.config.js","hash":"4080954692028639031","deps":["npm:path"]},{"file":"apps/front/project.json","hash":"15023743209923147453"},{"file":"apps/front/proxy.conf.json","hash":"7259453914108116145"},{"file":"apps/front/public/features/analise_dados.png","hash":"17588626614377212600"},{"file":"apps/front/public/features/atendimento.jpeg","hash":"14182072116559567803"},{"file":"apps/front/public/features/inversor-solar-off-grid.webp","hash":"14751919286460165073"},{"file":"apps/front/public/features/laboratorio.jpeg","hash":"12214417926207417887"},{"file":"apps/front/public/features/marketing.jpeg","hash":"16185297758530613945"},{"file":"apps/front/public/features/reparos-em-módulos.jpeg","hash":"10839093131469433857"},{"file":"apps/front/public/features/supply_chain.jpeg","hash":"5607512505281283736"},{"file":"apps/front/public/hero-background.png","hash":"1905400053378068532"},{"file":"apps/front/public/image-not-found.jpg","hash":"3675632495589020935"},{"file":"apps/front/public/logo-colored.png","hash":"11332139226760291396"},{"file":"apps/front/public/logo-white.png","hash":"2030352123857449868"},{"file":"apps/front/public/not-found-background.jpg","hash":"10961047483567222191"},{"file":"apps/front/public/partners/chint.png","hash":"9692868327148757182"},{"file":"apps/front/public/partners/fgl-distribuidora.png","hash":"15841458747648729442"},{"file":"apps/front/public/partners/growatt.png","hash":"603303704531153512"},{"file":"apps/front/public/partners/sungrow.png","hash":"14222239070473884360"},{"file":"apps/front/public/team/foto-tales.jpg","hash":"4310414676066201252"},{"file":"apps/front/public/team/walisson.jpeg","hash":"6073912530865206517"},{"file":"apps/front/tailwind.config.js","hash":"3157301621116708157","deps":["npm:@nx/react","npm:path","npm:@tailwindcss/forms"]},{"file":"apps/front/tsconfig.json","hash":"5932004352338878293"},{"file":"apps/front/tsconfig.spec.json","hash":"4919308245432237962"},{"file":"apps/front/types/next-auth.d.ts","hash":"12975293979554231765","deps":["index","npm:next-auth"]},{"file":"apps/front/utilities/comparation-utils.ts","hash":"10628670398907828820"},{"file":"apps/front/utilities/replace-img.ts","hash":"17200533277389752364"},{"file":"apps/front/utilities/txt-format.ts","hash":"14393171844190729359"}],"index":[{"file":"libs/domain/.eslintrc.json","hash":"14921153827776288937"},{"file":"libs/domain/README.md","hash":"9878226029952059074"},{"file":"libs/domain/jest.config.ts","hash":"8200353524730179895"},{"file":"libs/domain/project.json","hash":"11911161470254183895"},{"file":"libs/domain/src/index.ts","hash":"14422536047328614873"},{"file":"libs/domain/src/lib/entities/article.entity.ts","hash":"1485272553922853345"},{"file":"libs/domain/src/lib/entities/auth.entity.ts","hash":"13429403676187686245"},{"file":"libs/domain/src/lib/entities/company.entity.ts","hash":"10635781178018520552"},{"file":"libs/domain/src/lib/entities/image.entity.ts","hash":"6631940021203961912"},{"file":"libs/domain/src/lib/entities/index.ts","hash":"14929963670067700134"},{"file":"libs/domain/src/lib/entities/inverter.entity.ts","hash":"3262012685675054579"},{"file":"libs/domain/src/lib/entities/review.entity.ts","hash":"13584377425314218370"},{"file":"libs/domain/src/lib/entities/team.entity.ts","hash":"6415684022840832986"},{"file":"libs/domain/src/lib/entities/user.entity.ts","hash":"4139882575380771209"},{"file":"libs/domain/src/lib/shared/api-config.ts","hash":"15589431152945285547"},{"file":"libs/domain/src/lib/shared/articles.ts","hash":"4614755451802719049","deps":["npm:axios"]},{"file":"libs/domain/src/lib/shared/auth.ts","hash":"14915602481531446962","deps":["npm:axios"]},{"file":"libs/domain/src/lib/shared/company.ts","hash":"9122953098151461947","deps":["npm:axios"]},{"file":"libs/domain/src/lib/shared/customers.ts","hash":"5244810526159437191","deps":["npm:axios"]},{"file":"libs/domain/src/lib/shared/format-date.ts","hash":"8554629756439971321"},{"file":"libs/domain/src/lib/shared/images.ts","hash":"17592414308400744512","deps":["npm:axios"]},{"file":"libs/domain/src/lib/shared/index.ts","hash":"17911422883828230452"},{"file":"libs/domain/src/lib/shared/inverters.ts","hash":"18321657763478833219","deps":["npm:axios"]},{"file":"libs/domain/src/lib/shared/mail.ts","hash":"16550524207862702248","deps":["npm:axios","npm:react-hook-form"]},{"file":"libs/domain/src/lib/shared/team.ts","hash":"12980510046468711748","deps":["npm:axios"]},{"file":"libs/domain/tsconfig.json","hash":"10294729341131714718"},{"file":"libs/domain/tsconfig.lib.json","hash":"11026910191705403297"},{"file":"libs/domain/tsconfig.spec.json","hash":"11194536110028348959"}],"back-api":[{"file":"apps/back/api/.eslintrc.json","hash":"15876166253765426832"},{"file":"apps/back/api/jest.config.ts","hash":"3706582427698628424"},{"file":"apps/back/api/project.json","hash":"11159372100249069103"},{"file":"apps/back/api/src/app/app.controller.ts","hash":"12867712328167200683","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/app/app.module.ts","hash":"12828407637489317667","deps":["npm:multer","npm:@nestjs/common","npm:@nestjs/config","npm:@nestjs/core"]},{"file":"apps/back/api/src/app/app.service.ts","hash":"2826215425795483342","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/article/article.controller.ts","hash":"15335173463996909440","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/article/article.module.ts","hash":"14220959937463089394","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/article/article.service.ts","hash":"3665295240393343054","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/article/dto/create-article.dto.ts","hash":"17679965791744754302","deps":["npm:class-validator"]},{"file":"apps/back/api/src/article/dto/response-article.dto.ts","hash":"8379575171057818624","deps":["npm:class-validator"]},{"file":"apps/back/api/src/article/dto/update-article.dto.ts","hash":"8692860493606479755","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/assets/.gitkeep","hash":"3244421341483603138"},{"file":"apps/back/api/src/auth/auth.controller.ts","hash":"6240970335898126613","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/auth/auth.guard.ts","hash":"934025946862390273","deps":["npm:@nestjs/common","npm:rxjs","npm:express","npm:@nestjs/core"]},{"file":"apps/back/api/src/auth/auth.module.ts","hash":"7408772894996471396","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/auth/auth.service.ts","hash":"10446874218440217257","deps":["npm:crypto","npm:@nestjs/config","npm:@nestjs/common"]},{"file":"apps/back/api/src/auth/decorators/public.decorator.ts","hash":"10376415826596655091","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/auth/dto/create-auth.dto.ts","hash":"11598336765728088850"},{"file":"apps/back/api/src/auth/dto/signInDto.to.ts","hash":"1679939942059277689","deps":["npm:class-validator"]},{"file":"apps/back/api/src/auth/dto/update-auth.dto.ts","hash":"3077904081933631267","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/cloudinary/cloudinary.controller.ts","hash":"13102783727425690548","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/cloudinary/cloudinary.module.ts","hash":"6419522269321604982","deps":["npm:@nestjs/common","npm:@nestjs/config"]},{"file":"apps/back/api/src/cloudinary/cloudinary.service.ts","hash":"4156544685110300510","deps":["npm:@nestjs/common","npm:cloudinary","npm:buffer-to-stream","npm:@nestjs/config"]},{"file":"apps/back/api/src/company/company.controller.ts","hash":"16893194858194331037","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/company/company.module.ts","hash":"8459619635636444128","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/company/company.service.ts","hash":"17755440960999742764","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/company/dto/create-company.dto.ts","hash":"11078223315413475658","deps":["npm:class-validator"]},{"file":"apps/back/api/src/company/dto/update-company.dto.ts","hash":"8535202527507888738","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/environments/environment.ts","hash":"8074986075818921938","deps":["npm:node:process"]},{"file":"apps/back/api/src/image/dto/create-image.dto.ts","hash":"15047191503616773370","deps":["npm:class-validator"]},{"file":"apps/back/api/src/image/dto/response-image.dto.ts","hash":"14645496815042505325","deps":["npm:class-validator"]},{"file":"apps/back/api/src/image/dto/update-image.dto.ts","hash":"10253384686841852503","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/image/image.controller.ts","hash":"9923494857129052246","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/image/image.module.ts","hash":"6446748425869940412","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/image/image.service.ts","hash":"4990353496643911885","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/inverter/dto/create-inverter.dto.ts","hash":"17519730719185322612","deps":["npm:class-validator"]},{"file":"apps/back/api/src/inverter/dto/response-inverter.dto.ts","hash":"2882043380130953699","deps":["npm:class-validator"]},{"file":"apps/back/api/src/inverter/dto/update-inverter.dto.ts","hash":"8543864569654425007","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/inverter/inverter.controller.ts","hash":"14629359239081112572","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/inverter/inverter.module.ts","hash":"1138884733060720663","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/inverter/inverter.service.ts","hash":"629836511356286561","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/mail/dto/invite-mail.dto.ts","hash":"10289216283050332640","deps":["npm:class-validator"]},{"file":"apps/back/api/src/mail/dto/recovery-mail.dto.ts","hash":"18250179871794295284","deps":["npm:class-validator"]},{"file":"apps/back/api/src/mail/mail.controller.ts","hash":"16912111189320932363","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/mail/mail.module.ts","hash":"14701797255317266899","deps":["npm:@nestjs/common","npm:@nestjs-modules/mailer"]},{"file":"apps/back/api/src/mail/mail.service.ts","hash":"17669050112917463566","deps":["npm:@nestjs/common","npm:@nestjs-modules/mailer"]},{"file":"apps/back/api/src/main.ts","hash":"15421223859750632857","deps":["npm:@nestjs/common","npm:@nestjs/core"]},{"file":"apps/back/api/src/prisma.module.ts","hash":"5987838250411648661","deps":["npm:@nestjs/common","npm:@nestjs/config"]},{"file":"apps/back/api/src/prisma.service.ts","hash":"12987938510090520155","deps":["npm:@nestjs/common","npm:@prisma/client"]},{"file":"apps/back/api/src/review/dto/create-review.dto.ts","hash":"9144413607615541412","deps":["npm:class-validator"]},{"file":"apps/back/api/src/review/dto/response-review.dto.ts","hash":"2701099071796165127","deps":["npm:class-validator"]},{"file":"apps/back/api/src/review/dto/update-review.dto.ts","hash":"10083108367644679177","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/review/review.controller.ts","hash":"15115984577830208402","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/review/review.module.ts","hash":"4795828811114331090","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/review/review.service.ts","hash":"6734123654823714106","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/team/dto/create-team.dto.ts","hash":"8932456159180841719","deps":["npm:class-validator"]},{"file":"apps/back/api/src/team/dto/update-team.dto.ts","hash":"7389569041741225481","deps":["npm:@nestjs/mapped-types"]},{"file":"apps/back/api/src/team/team.controller.ts","hash":"15760062363574802410","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/team/team.module.ts","hash":"12498731706175526318","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/team/team.service.ts","hash":"9237281043117384253","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/user/dto/create-user.dto.ts","hash":"5428084334862964783","deps":["npm:class-validator"]},{"file":"apps/back/api/src/user/dto/response-user.dto.ts","hash":"1014238066853567631","deps":["npm:class-transformer","npm:class-validator"]},{"file":"apps/back/api/src/user/dto/update-user.dto.ts","hash":"13292343421029783695","deps":["npm:@nestjs/mapped-types","npm:class-transformer"]},{"file":"apps/back/api/src/user/user.controller.ts","hash":"6436374173512181954","deps":["npm:@nestjs/common","npm:@nestjs/platform-express"]},{"file":"apps/back/api/src/user/user.module.ts","hash":"1038703562796308380","deps":["npm:@nestjs/common"]},{"file":"apps/back/api/src/user/user.service.ts","hash":"6414757334735217573","deps":["npm:@nestjs/common","npm:crypto","npm:@nestjs/config"]},{"file":"apps/back/api/tsconfig.app.json","hash":"1862137277567528699"},{"file":"apps/back/api/tsconfig.json","hash":"8471505103983814816"},{"file":"apps/back/api/tsconfig.spec.json","hash":"12816665589628797695"},{"file":"apps/back/api/webpack.config.js","hash":"3897808457268280331","deps":["npm:@nx/webpack"]}],"back-api-e2e":[{"file":"apps/back/api-e2e/.eslintrc.json","hash":"17795843241288797487"},{"file":"apps/back/api-e2e/jest.config.ts","hash":"14379696442065234057"},{"file":"apps/back/api-e2e/project.json","hash":"13152072748852050018"},{"file":"apps/back/api-e2e/src/back-api/back-api.spec.ts","hash":"6988925255182087386","deps":["npm:axios"]},{"file":"apps/back/api-e2e/src/support/global-setup.ts","hash":"18221119270488052961"},{"file":"apps/back/api-e2e/src/support/global-teardown.ts","hash":"17927034305001160425"},{"file":"apps/back/api-e2e/src/support/test-setup.ts","hash":"4165311015569872896","deps":["npm:axios"]},{"file":"apps/back/api-e2e/tsconfig.json","hash":"9911868023249742000"},{"file":"apps/back/api-e2e/tsconfig.spec.json","hash":"9003974716739283917"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};
    window.taskGraphResponse = {"taskGraphs":{"back-api-e2e:e2e":{"roots":["back-api-e2e:e2e"],"tasks":{"back-api-e2e:e2e":{"id":"back-api-e2e:e2e","target":{"project":"back-api-e2e","target":"e2e"},"projectRoot":"apps/back/api-e2e","overrides":{}}},"dependencies":{"back-api-e2e:e2e":[]}},"back-api-e2e:lint":{"roots":["back-api-e2e:lint"],"tasks":{"back-api-e2e:lint":{"id":"back-api-e2e:lint","target":{"project":"back-api-e2e","target":"lint"},"projectRoot":"apps/back/api-e2e","overrides":{}}},"dependencies":{"back-api-e2e:lint":[]}},"back-api:build":{"roots":["back-api:build:production"],"tasks":{"back-api:build:production":{"id":"back-api:build:production","target":{"project":"back-api","target":"build","configuration":"production"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:build:production":[]}},"back-api:build:development":{"roots":["back-api:build:development"],"tasks":{"back-api:build:development":{"id":"back-api:build:development","target":{"project":"back-api","target":"build","configuration":"development"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:build:development":[]}},"back-api:build:production":{"roots":["back-api:build:production"],"tasks":{"back-api:build:production":{"id":"back-api:build:production","target":{"project":"back-api","target":"build","configuration":"production"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:build:production":[]}},"back-api:serve":{"roots":["back-api:serve:development"],"tasks":{"back-api:serve:development":{"id":"back-api:serve:development","target":{"project":"back-api","target":"serve","configuration":"development"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:serve:development":[]}},"back-api:serve:development":{"roots":["back-api:serve:development"],"tasks":{"back-api:serve:development":{"id":"back-api:serve:development","target":{"project":"back-api","target":"serve","configuration":"development"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:serve:development":[]}},"back-api:serve:production":{"roots":["back-api:serve:production"],"tasks":{"back-api:serve:production":{"id":"back-api:serve:production","target":{"project":"back-api","target":"serve","configuration":"production"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:serve:production":[]}},"back-api:lint":{"roots":["back-api:lint"],"tasks":{"back-api:lint":{"id":"back-api:lint","target":{"project":"back-api","target":"lint"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:lint":[]}},"back-api:test":{"roots":["back-api:test"],"tasks":{"back-api:test":{"id":"back-api:test","target":{"project":"back-api","target":"test"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:test":[]}},"back-api:test:ci":{"roots":["back-api:test:ci"],"tasks":{"back-api:test:ci":{"id":"back-api:test:ci","target":{"project":"back-api","target":"test","configuration":"ci"},"projectRoot":"apps/back/api","overrides":{}}},"dependencies":{"back-api:test:ci":[]}},"index:lint":{"roots":["index:lint"],"tasks":{"index:lint":{"id":"index:lint","target":{"project":"index","target":"lint"},"projectRoot":"libs/domain","overrides":{}}},"dependencies":{"index:lint":[]}},"index:test":{"roots":["index:test"],"tasks":{"index:test":{"id":"index:test","target":{"project":"index","target":"test"},"projectRoot":"libs/domain","overrides":{}}},"dependencies":{"index:test":[]}},"index:test:ci":{"roots":["index:test:ci"],"tasks":{"index:test:ci":{"id":"index:test:ci","target":{"project":"index","target":"test","configuration":"ci"},"projectRoot":"libs/domain","overrides":{}}},"dependencies":{"index:test:ci":[]}},"front:build":{"roots":["front:build:production"],"tasks":{"front:build:production":{"id":"front:build:production","target":{"project":"front","target":"build","configuration":"production"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:build:production":[]}},"front:build:development":{"roots":["front:build:development"],"tasks":{"front:build:development":{"id":"front:build:development","target":{"project":"front","target":"build","configuration":"development"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:build:development":[]}},"front:build:production":{"roots":["front:build:production"],"tasks":{"front:build:production":{"id":"front:build:production","target":{"project":"front","target":"build","configuration":"production"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:build:production":[]}},"front:serve":{"roots":["front:serve:development"],"tasks":{"front:serve:development":{"id":"front:serve:development","target":{"project":"front","target":"serve","configuration":"development"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:serve:development":[]}},"front:serve:development":{"roots":["front:serve:development"],"tasks":{"front:serve:development":{"id":"front:serve:development","target":{"project":"front","target":"serve","configuration":"development"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:serve:development":[]}},"front:serve:production":{"roots":["front:serve:production"],"tasks":{"front:serve:production":{"id":"front:serve:production","target":{"project":"front","target":"serve","configuration":"production"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:serve:production":[]}},"front:export":{"roots":["front:export"],"tasks":{"front:export":{"id":"front:export","target":{"project":"front","target":"export"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:export":[]}},"front:test":{"roots":["front:test"],"tasks":{"front:test":{"id":"front:test","target":{"project":"front","target":"test"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:test":[]}},"front:test:ci":{"roots":["front:test:ci"],"tasks":{"front:test:ci":{"id":"front:test:ci","target":{"project":"front","target":"test","configuration":"ci"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:test:ci":[]}},"front:lint":{"roots":["front:lint"],"tasks":{"front:lint":{"id":"front:lint","target":{"project":"front","target":"lint"},"projectRoot":"apps/front","overrides":{}}},"dependencies":{"front:lint":[]}}},"errors":{}};
    