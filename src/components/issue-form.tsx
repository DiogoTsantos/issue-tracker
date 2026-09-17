import type { Issue, IssueStatus, IssuePriority } from "../types/issue";
import { useState } from "react";

const emptyIssue: Issue = {
  id: '',
  title: '',
  description: '',
  status: 'backlog',
  priority: 'medium',
  createdAt: '',
};


export default function IssueForm( {initialIssue, onSubmit}: { initialIssue?: Issue; onSubmit: (issue: Issue) => void }) {
    const [issue, setIssue] = useState<Issue | null>({ ...initialIssue ?? emptyIssue });
    const [formProcessed, setFormProcessed] = useState(false);


    function submitForm(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const finalIssue: Issue = {
            ...emptyIssue,
            ...issue,
            id: issue?.id || Date.now().toString(),
            createdAt: issue?.createdAt || new Date().toISOString()
        };

        onSubmit(finalIssue);
        setFormProcessed(true);
        setIssue({ ...emptyIssue });
    }

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
            <form className="issue-form" onSubmit={submitForm}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required value={ issue?.title }
                        minLength={3}
                        onChange={(e) => setIssue({...emptyIssue, ...issue, title: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        value={issue?.description}
                        onChange={(e) => setIssue({...emptyIssue, ...issue, description: e.target.value})}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        name="status"
                        required
                        value={issue?.status}
                        onChange={(e) => setIssue({...emptyIssue, ...issue, status: e.target.value as IssueStatus})}
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
                        value={issue?.priority}
                        onChange={(e) => setIssue({...emptyIssue, ...issue, priority: e.target.value as IssuePriority})}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value={issue?.id ? "Update Issue" : "Add Issue"} />
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