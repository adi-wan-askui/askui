import { AnalyticsInterface } from './analytics-interface';
export declare class Analytics implements AnalyticsInterface {
    private userIdentifier;
    getAnalyticsHeaders(): Promise<Record<string, string>>;
}
