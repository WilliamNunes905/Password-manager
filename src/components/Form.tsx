import Button from "./Button"

export default function Form() {
  return (
    <div>
      <form>
        <fieldset>
          <label>
            Nome do serviço
                <input
                  type="text"
                />
          </label>

          <label>
            Login
                <input
                  type="text"
                />
          </label>

          <label>
            Senha
                <input
                  type="password"
                />
          </label>

          <label>
            URL
                <input
                  type="text"
                />
          </label>

          <Button>Cadastrar</Button>
          <Button>Limpar</Button>
        </fieldset>
      </form>
    </div>
  )
}

