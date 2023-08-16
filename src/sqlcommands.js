import connection from './connection.js';


export async function addTarefa(tarefa,ordem,finalizacao,cadastro){

    let command=`INSERT INTO TB_TAREFA(DS_TAREFA,NR_ORDEM,BT_FINALIZADO,DT_CADASTRO)
                    values(?,?,?,?)`;

    let resp=await connection.query(command[tarefa,ordem,finalizacao,cadastro]);
    let info=resp[0];

    return info;
}