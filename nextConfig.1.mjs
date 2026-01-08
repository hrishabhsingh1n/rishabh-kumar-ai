/**
 * @typedef {NextConfig} NewType
 */

export const nextConfig: NewType = {
    typescript: {
        // !! WARNING !!
        // TypeScript errors ki wajah se build rukne se rokne ke liye
        ignoreBuildErrors: true,
    },
    eslint: {
        // Build ke waqt ESLint checks ko skip karne ke liye
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
};
