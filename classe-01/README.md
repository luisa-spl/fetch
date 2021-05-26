![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Integrando com o Spotify

Tarefas deste exercício:

- [ ] Criar uma aplicação React com o CRA
- [ ] Retirar tudo o que não iremos utilizar do template (testes, performance, etc)
- [ ] Criar um `<input />` e gerenciar o valor dele no estado da sua aplicação
- [ ] Criar uma função para ser chamada no clique de um botão, submissão de formulário ou evento de teclado no input
- [ ] Nesta função, fazer uma requisição na rota `https://accounts.spotify.com/api/token` da [API do Spotify](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow) (adicionando os respectivos cabeçalhos, parametros de query, etc a requisição), afim de pegar o token da sua aplicação.
- [ ] Com o token em mãos, fazer uma requisição na rota `https://api.spotify.com/v1/search` da [API do Spotify](https://developer.spotify.com/documentation/web-api/reference/#category-search) (adicionando os respectivos cabeçalhos, parametros de query, etc a requisição), afim de pegar as músicas que serão buscadas com o valor que estiver no `<input />`.
- [ ] Depois de pegar o dados da rota de busca do Spotify, você deverá controlar o estado dessa requisição, sempre informando o usuário quando acontecer algum erro, quando a busca dele resultar em nada ou quando a busca ainda estiver acontecendo ("carregando").

**Tarefas extras para praticar mais!**
- [ ] **Extra** - Tente procurar outras rotas da API do Spotify para integrar com sua aplicação, ou mesmo alguma outra API. (preste atenção se a API precisa de autorização)
- [ ] **Extra** - Estilize sua aplicação! [Aqui vão alguns exemplos de designs para aplicações relacionadas a música](https://dribbble.com/search/music)

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `modulo 3` `React` `fetch` `exercício de classe` 
