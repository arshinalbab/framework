import Mithril from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import { Extension } from 'flarum/admin/AdminApplication';
export declare type UpdatedPackage = {
    name: string;
    version: string;
    latest: string;
    'latest-minor': string | null;
    'latest-major': string | null;
    'latest-status': string;
    description: string;
};
export declare type ComposerUpdates = {
    installed: UpdatedPackage[];
};
export declare type LastUpdateCheck = {
    checkedAt: Date | null;
    updates: ComposerUpdates;
};
declare type UpdateType = 'major' | 'minor' | 'global';
declare type UpdateStatus = 'success' | 'failure' | null;
export declare type UpdateState = {
    ranAt: Date | null;
    status: UpdateStatus;
    limitedPackages: string[];
    incompatibleExtensions: string[];
};
export declare type LastUpdateRun = {
    [key in UpdateType]: UpdateState;
} & {
    limitedPackages: () => string[];
};
interface UpdaterAttrs extends ComponentAttrs {
}
export default class Updater extends Component<UpdaterAttrs> {
    isLoading: string | null;
    packageUpdates: Record<string, UpdatedPackage>;
    lastUpdateCheck: LastUpdateCheck;
    get lastUpdateRun(): LastUpdateRun;
    oninit(vnode: Mithril.Vnode<UpdaterAttrs, this>): void;
    view(): (JSX.Element | null)[];
    getExtensionUpdates(): Extension[];
    getCoreUpdate(): UpdatedPackage | undefined;
    checkForUpdates(): void;
    updateCoreMinor(): void;
    updateExtension(extension: any): void;
    updateGlobally(): void;
}
export {};
