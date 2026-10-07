<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-brands">
                <div class="footer-brand">
                    <div class="footer-brand-icon">
                        <img src="/img/logo.png" alt="QFluentWidgets" width="72" height="72">
                    </div>
                    <div class="footer-name">QFluentWidgets</div>
                    <div class="footer-copyright">
                        © {{ year }} Shokokawaii Inc. All rights reserved.
                    </div>
                </div>

                <div class="footer-brand">
                    <div class="footer-brand-icon">
                        <img src="/img/fairy-oracle-sanctuary.png" alt="Fairy Oracle Sanctuary" width="72" height="72">
                    </div>
                    <div class="footer-name">Fairy Oracle Sanctuary</div>
                    <div class="footer-team">
                        <a href="https://fairy.ora-san.org/" target="_blank" rel="noopener noreferrer">
                            fairy.ora-san.org
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
let year = ref(new Date().getFullYear());
</script>

<style>
.footer {
    @apply mx-auto mt-32 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8;
}

.footer-container {
    @apply border-t border-slate-900/5 pt-10 pb-8 dark:border-white/10;

    .footer-brands {
        @apply mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16;
    }

    .footer-brand {
        @apply flex min-w-0 flex-col items-center text-center;
    }

    .footer-brand-icon {
        @apply flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-white/5;

        img {
            @apply h-[72px] w-[72px] object-contain;
        }
    }

    .footer-name {
        @apply mt-5 text-xl font-semibold text-black dark:text-white sm:text-2xl;
    }

    .footer-copyright {
        @apply mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 tracking-normal;
    }

    .footer-team {
        @apply mt-4 text-sm leading-6 tracking-normal;

        a {
            @apply text-slate-600 dark:text-slate-400 !important;
            text-decoration: none;
            transition: color 180ms ease;

            &:hover,
            &:focus-visible {
                @apply text-sky-600 dark:text-sky-400 !important;
                text-decoration: underline;
                text-underline-offset: 4px;
            }

            &:focus-visible {
                outline: 2px solid #38bdf8;
                outline-offset: 4px;
                border-radius: 2px;
            }
        }
    }
}
</style>
