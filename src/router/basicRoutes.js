import ProductDisplay from "@/components/ProductDisplay";
import ProductEditor from '@/components/ProductEditor.vue';
import Preferences from '@/components/Preferences.vue';
import Products from '@/components/Products.vue';

export default [
    { path: "/preferences", component: Preferences},
    { path: "/products", component: Products,
        children: [
            { name: 'table', path: 'list', component: ProductDisplay},
            { name: 'editor', path: 'edit/:id', component: ProductEditor},
            { path: 'create', component: ProductEditor },
            { path: '', redirect: "list"}
        ]},
    { path: "/edit/:id", redirect: to => `/products/edit/${to.params.id}`}
]