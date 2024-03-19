import { promises } from 'dns';
import {Plan} from './interface'
const BaseUrl="http://localhost:5000"

export async function getAllplan():Promise<Plan> {
    const res = await fetch(BaseUrl+"/plan");
    const data = await res.json();
    return data;
}

export const AddPlan = async (plan: Plan) => {
    console.log(plan);
    try {
        const res = await fetch(BaseUrl+"/plan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plan),
        });

        // ステータスコードが200番台でない場合はエラーとして扱う
        if (!res.ok) {
            throw new Error(`Server responded with status ${res.status}`);
        }

        // const newTodo = await res.json();
        // return newTodo;
    } catch (error) {
        // エラーハンドリング: エラーログを表示またはエラーを再スロー
        console.error("失敗です:", error);
        throw error;
    }
};
