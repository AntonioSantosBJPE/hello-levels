# Hello Levels - Plataforma de Trilhas de Estudo de Inglês

## 📚 Sobre o Projeto

O **Hello Levels** é uma plataforma educacional inovadora que oferece trilhas de estudo estruturadas para diferentes níveis de proficiência em inglês, seguindo o padrão CEFR (Common European Framework of Reference for Languages).

### 🎯 Objetivo

Fornecer uma experiência de aprendizado completa e personalizada para estudantes de inglês, combinando recursos multimídia, exercícios práticos e acompanhamento de progresso.

### 📊 Níveis de Proficiência

- **A1 (Iniciante)** - Disponível ✅
- **A2 (Básico)** - Em desenvolvimento
- **B1 (Intermediário)** - Em desenvolvimento
- **B2 (Intermediário Superior)** - Em desenvolvimento
- **C1 (Avançado)** - Em desenvolvimento
- **C2 (Fluente)** - Em desenvolvimento

### 🎓 Eixos de Aprendizado

Cada nível oferece conteúdo estruturado em três eixos principais:

1. **📖 Gramática** - Regras gramaticais e exercícios práticos
2. **📝 Vocabulário** - Expansão de vocabulário contextualizado
3. **🌍 Tópicos Gerais** - Conteúdo cultural e situacional

### 📱 Recursos Disponíveis

- **🎥 Vídeos do YouTube** - Aulas e explicações em vídeo
- **📄 Apostilas** - Material didático em PDF
- **❓ Questionários** - Testes de conhecimento
- **📊 Simulados** - Avaliações completas por nível

## 🛠️ Stack Tecnológica

### Frontend & Backend

- **[Next.js 15](https://nextjs.org/)** - Framework fullstack com React 19
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Shadcn/ui](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis
- **[Origin UI](https://origin-ui.com/)** - Componentes adicionais de UI

### Autenticação & Segurança

- **[Better Auth](https://better-auth.com/)** - Sistema de autenticação moderno

### Gerenciamento de Estado

- **[Context API](https://react.dev/learn/passing-data-deeply-with-context)** - Contexto do React
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado global

### Formulários & Validação

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas

### Requisições HTTP & Cache

- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[React Query](https://tanstack.com/query/latest)** - Gerenciamento de estado do servidor

### Banco de Dados

- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Prisma ORM](https://www.prisma.io/)** - ORM moderno para TypeScript

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**

```bash
git clone [URL_DO_REPOSITORIO]
cd hello-levels
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/hello_levels"
NEXTAUTH_SECRET="sua_chave_secreta_aqui"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configure o banco de dados**

```bash
npx prisma generate
npx prisma db push
```

5. **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o projeto em execução.

## 📁 Estrutura do Projeto

```
hello-levels/
├── src/
│   ├── app/                    # App Router do Next.js 15
│   │   ├── api/               # Rotas da API
│   │   ├── sign-in/           # Página de login
│   │   ├── sign-up/           # Página de cadastro
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── lib/                   # Utilitários e configurações
│   │   ├── auth.ts            # Configuração do Better Auth
│   │   ├── auth-client.ts     # Cliente de autenticação
│   │   ├── prisma.ts          # Cliente do Prisma
│   │   └── utils.ts           # Funções utilitárias
│   └── components/            # Componentes reutilizáveis
├── prisma/                    # Configurações do Prisma
│   ├── schema.prisma          # Schema do banco de dados
│   └── migrations/            # Migrações do banco
├── public/                    # Arquivos estáticos
└── docs/                      # Documentação adicional
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Paleta personalizada definida no Tailwind
- **Tipografia**: Sistema de fontes escalável
- **Componentes**: Biblioteca de componentes do Shadcn/ui
- **Espaçamento**: Sistema de espaçamento consistente
- **Responsividade**: Design mobile-first

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Constrói o projeto para produção
npm run start        # Inicia o servidor de produção

# Qualidade de Código
npm run lint         # Executa o ESLint
npm run lint:fix     # Corrige problemas do ESLint
npm run format       # Formata o código com Prettier
npm run format:check # Verifica formatação
npm run type-check   # Verifica tipos TypeScript
npm run check-all    # Executa todas as verificações
```

## 📈 Roadmap

### Fase 1 - MVP (Atual)

- [x] Estrutura base do projeto
- [x] Sistema de autenticação
- [x] Trilha A1 completa
- [ ] Interface de usuário básica
- [ ] Sistema de progresso

### Fase 2 - Expansão

- [ ] Trilhas A2 e B1
- [ ] Sistema de gamificação
- [ ] Certificados de conclusão
- [ ] Dashboard de progresso

### Fase 3 - Recursos Avançados

- [ ] Trilhas B2, C1 e C2
- [ ] IA para personalização
- [ ] Comunidade de usuários
- [ ] Aplicativo mobile

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas, sugestões ou problemas:

- Abra uma [issue](https://github.com/seu-usuario/hello-levels/issues)
- Entre em contato: [seu-email@exemplo.com]

---

**Hello Levels** - Transformando o aprendizado de inglês em uma jornada interativa e eficaz! 🚀
