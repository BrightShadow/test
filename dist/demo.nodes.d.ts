export declare let unknownFoto: string;
export declare let allNodes: {
    id: string;
    parentId: any;
    data: {
        text: string;
        sex: string;
        foto: string;
    };
    children: ({
        id: string;
        parentId: string;
        data: {
            text: string;
        };
        children: {
            id: string;
            parentId: string;
            data: {
                text: string;
                sex: string;
                foto: string;
            };
            children: any[];
        }[];
    } | {
        id: string;
        parentId: string;
        data: {
            text: string;
            sex: string;
        };
        children: {
            id: string;
            parentId: string;
            data: {
                text: string;
                sex: string;
                foto: string;
            };
            children: ({
                id: string;
                parentId: string;
                data: {
                    text: string;
                    sex: string;
                };
                children: any[];
            } | {
                id: string;
                parentId: string;
                data: {
                    text: string;
                    sex: string;
                    foto: string;
                };
                children: any[];
            } | {
                id: string;
                parentId: string;
                data: {
                    text: string;
                };
                children: any[];
            })[];
        }[];
    } | {
        id: string;
        parentId: string;
        data: {
            text: string;
        };
        children: {
            id: string;
            parentId: string;
            data: {
                text: string;
            };
            children: ({
                id: string;
                parentId: string;
                data: {
                    text: string;
                };
                children: any[];
            } | {
                id: string;
                parentId: string;
                data: {
                    text: string;
                    sex: string;
                };
                children: {
                    id: string;
                    parentId: string;
                    data: {
                        text: string;
                    };
                    children: {
                        id: string;
                        parentId: string;
                        data: {
                            text: string;
                            sex: string;
                        };
                        children: {
                            id: string;
                            parentId: string;
                            data: {
                                text: string;
                            };
                            children: {
                                id: string;
                                parentId: string;
                                data: {
                                    text: string;
                                };
                                children: {
                                    id: string;
                                    parentId: string;
                                    data: {
                                        text: string;
                                    };
                                    children: {
                                        id: string;
                                        parentId: string;
                                        data: {
                                            text: string;
                                            sex: string;
                                        };
                                        children: {
                                            id: string;
                                            parentId: string;
                                            data: {
                                                text: string;
                                            };
                                            children: {
                                                id: string;
                                                parentId: string;
                                                data: {
                                                    text: string;
                                                    sex: string;
                                                };
                                                children: {
                                                    id: string;
                                                    parentId: string;
                                                    data: {
                                                        text: string;
                                                    };
                                                    children: {
                                                        id: string;
                                                        parentId: string;
                                                        data: {
                                                            text: string;
                                                            sex: string;
                                                        };
                                                        children: any[];
                                                    }[];
                                                }[];
                                            }[];
                                        }[];
                                    }[];
                                }[];
                            }[];
                        }[];
                    }[];
                }[];
            })[];
        }[];
    })[];
};
