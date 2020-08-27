import ProductDisplay from "@/components/ProductDisplay";
import ProductEditor from '@/components/ProductEditor.vue';
import SideBySide from '@/components/SideBySide.vue';

export default {
     path: "/named", component: SideBySide,
            children: [
                { path: "tableleft", components: {
                    left: ProductDisplay,
                    right: ProductEditor
                }},
                { path: "tableright", components: {
                    left: ProductEditor,
                    right: ProductDisplay
                }}
            ] 
}