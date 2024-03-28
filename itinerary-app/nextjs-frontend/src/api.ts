
import {Plan} from './interface'
import { UserInfo } from './interface';
const BaseUrl="http://localhost:5000"

export async function createUser(UserInfo:UserInfo) {
    try {
        const res = await fetch("http://localhost:5000/Users", { // URL を正しくフォーマットする
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserInfo),
        });

        // ステータスコードが200番台でない場合はエラーとして扱う
        if (!res.ok) {
            throw new Error(`Server responded with status ${res.status}`);
        }

        // レスポンスが必要ない場合はこの行を削除
        // const newTodo = await res.json();
        // return newTodo;
    } catch (error) {
        // エラーハンドリング: エラーログを表示またはエラーを再スロー
        console.error("失敗です:", error);
        throw error;
    }
}

export async function getAllUsers():Promise<UserInfo[]> {
    const res = await fetch("http://localhost:5000/Users");
    const data = await res.json();
    return data;
}

export async function getAllplan():Promise<Plan[]> {
    const res = await fetch("http://localhost:5000/plan");
    const data = await res.json();
    return data;
}

export async function updatePlan(planInfo:Plan){
    try{
    const res = await fetch(`http://localhost:5000/plan/${planInfo._id}/update`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(planInfo),
    })
    if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
    }

    // レスポンスが必要ない場合はこの行を削除
    // const newTodo = await res.json();
    // return newTodo;
} catch (error) {
    // エラーハンドリング: エラーログを表示またはエラーを再スロー
    console.error("失敗です:", error);
    throw error;
}
    
}

export async function createPlan(planInfo:Plan) {
    try {
        const res = await fetch("http://localhost:5000/plan", { // URL を正しくフォーマットする
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(planInfo),
        });

        // ステータスコードが200番台でない場合はエラーとして扱う
        if (!res.ok) {
            throw new Error(`Server responded with status ${res.status}`);
        }

        // レスポンスが必要ない場合はこの行を削除
        // const newTodo = await res.json();
        // return newTodo;
    } catch (error) {
        // エラーハンドリング: エラーログを表示またはエラーを再スロー
        console.error("失敗です:", error);
        throw error;
    }
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
