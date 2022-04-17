const data = [
    {
        "groupId": "12321",
        "groupName": "byron测试",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "felix-test-group",
        "groupName": "felix测试分类",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "marcusone",
        "groupName": "marcus一级",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "poe",
        "groupName": "poe",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": [
            {
                "groupId": "first",
                "groupName": "一级分类",
                "parentId": "poe",
                "iconPath": null,
                "createTime": 0,
                "total": 0,
                "sort": 0,
                "children": [
                    {
                        "groupId": "second",
                        "groupName": "二级分类",
                        "parentId": "first",
                        "iconPath": null,
                        "createTime": 0,
                        "total": 0,
                        "sort": 0,
                        "children": [
                            {
                                "groupId": "third",
                                "groupName": "三级分类",
                                "parentId": "second",
                                "iconPath": null,
                                "createTime": 0,
                                "total": 0,
                                "sort": 0,
                                "children": [
                                    {
                                        "groupId": "fourth",
                                        "groupName": "四级分类",
                                        "parentId": "third",
                                        "iconPath": null,
                                        "createTime": 0,
                                        "total": 0,
                                        "sort": 0,
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "groupId": "roubin",
        "groupName": "roubin测试分类",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "roy_model_group1",
        "groupName": "roy模型组",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "seren",
        "groupName": "seren测试分类",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "tideyj",
        "groupName": "tide一级",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": [
            {
                "groupId": "tideej",
                "groupName": "tide二级",
                "parentId": "tideyj",
                "iconPath": null,
                "createTime": 0,
                "total": 0,
                "sort": 0,
                "children": []
            }
        ]
    },
    {
        "groupId": "winntestGroup",
        "groupName": "winn测试分类",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "aliyun_resource",
        "groupName": "阿里云资源",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "other",
        "groupName": "其他",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    },
    {
        "groupId": "zhonghang",
        "groupName": "中行",
        "parentId": "0",
        "iconPath": null,
        "createTime": 0,
        "total": 0,
        "sort": 0,
        "children": []
    }
]
function deep(item, idx) {
    if (item && item.children.length) {
        const children = item.children.map((child, index) => {
            return deep(child, `${idx}-${index}`);
        })
        return {
            key: idx,
            title: item['groupName'],
            children
        }
    } else {
        return {
            key: idx,
            title: item['groupName'],
            children: []
        }
    }
}
console.log(data.map(deep))