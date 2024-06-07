import { reactive } from "vue";
import { defineStore } from "pinia";
import router from "@/core/router";
import { IUseAppStore, IAppState } from "@/core/interfaces/app";

export const useApp = defineStore<"app", IUseAppStore>(
  "app",
  () => {
    const state = reactive<IAppState>({
      const: true,
      page: "home",
    });

    const selectPage = (page: string) => {
      state.page = page;
      router.push(`/${page}`);
    }

    return {
      state,
      selectPage,
    };
  }
);