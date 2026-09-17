import type { Issue } from "../types/issue";
import { useState } from "react";

const emptyIssue: Issue = {
  id: '',
  title: '',
  description: '',
  status: 'backlog',
  priority: 'medium',
};


export default function IssueForm( {initialIssue, onSubmit}: { initialIssue?: Issue; onSubmit: (issue: Issue) => void }) {
    const [issue, setIssue] = useState<Issue | null>(null);
    const [formProcessed, setFormProcessed] = useState(false);

    const currentIssue = issue ?? initialIssue ?? emptyIssue;

    console.log("initialIssue", initialIssue);
    console.log("issue", issue);
    return (
        <>
            {
                formProcessed && (
                    <div className="form-processed-message">
                        Issue submitted successfully!
                    </div>
                )
            }
            <br />
            <form className="issue-form">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required value={ currentIssue.title }
                        minLength={3}
                        onChange={(e) => setIssue({...currentIssue, title: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        value={currentIssue.description}
                        onChange={(e) => setIssue({...currentIssue, description: e.target.value})}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        name="status"
                        required
                        value={currentIssue.status}
                        onChange={(e) => setIssue({...currentIssue, status: e.target.value as any})}
                    >
                        <option value="backlog">Backlog</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        name="priority"
                        required
                        value={currentIssue.priority}
                        onChange={(e) => setIssue({...currentIssue, priority: e.target.value as any})}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    if (issue) {
                        if (!issue.id) {
                            issue.createdAt = new Date().toISOString();
                            issue.id = Date.now().toString();
                        }

                        onSubmit(issue);
                        setFormProcessed(true);
                        setIssue({
                            ...emptyIssue
                        });
                    }
                }}>
                {
                 currentIssue?.id ? "Update Issue" : "Add Issue"   
                }
                </button>
                <button type="reset" onClick={(e) => {
                    e.preventDefault();
                    setIssue({
                        ...emptyIssue,
                    });
                }}>
                    Reset
                </button>
            </form>
            <br />
            <br />
        </>
    );
}