import { produtos } from "@/src/core";

export default function PaginaProduto(props: any) {
  const id = props.params.id;
  const produto = produtos.find((p) => p.id === Number(id));
  return produto ? (
    <div>{produto?.nome}</div>
  ) : (
    <div>Produto não está funcionando</div>
  );
}
